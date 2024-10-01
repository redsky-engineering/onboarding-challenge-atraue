import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read restura config file
const resturaConfig = JSON.parse(
	fs.readFileSync(join(__dirname, '../restura.config.json'), 'utf8')
);
if (!resturaConfig.schemaBaseUrl || !resturaConfig.authToken) {
	console.error('Schema URL or Auth Token not found in restura.config.json');
	console.error('It needs to look something like this:');
	console.error('{"schemaBaseUrl": "http://localhost:3001", "authToken": "abc123"}');
	process.exit(1);
}

// Check for existence of folders
const generatedFolder = join(__dirname, '../src/generated');
if (!fs.existsSync(generatedFolder)) {
	fs.mkdirSync(generatedFolder);
}

function capitalizeFirst(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

function generateApiAndHooksRequestsFromSchema(schema) {
	let apiFileContent = `import http from '$lib/utils/http';\n\n`;

	for (let endpoint of schema.endpoints) {
		// Should be v1 or v2, etc.

		const baseUrlSplit = endpoint.baseUrl.split('/');
		const version = baseUrlSplit[baseUrlSplit.length - 1];

		apiFileContent += `/**\n`;
		apiFileContent += ` * ${endpoint.description}\n`;
		apiFileContent += ` * @summary ${endpoint.name} \n`;
		apiFileContent += ` */\n`;
		apiFileContent += `export namespace ApiRequest${capitalizeFirst(version)} {\n`;

		for (let route of endpoint.routes) {
			const functionName = `${route.method.toLowerCase()}${route.path
				.replace(new RegExp('-', 'g'), '/')
				.split('/')
				.reduce((acc, cur) => {
					if (cur === '') return acc;
					return acc + capitalizeFirst(cur);
				}, '')}`;

			const replacedHyphenPath = `${route.path.split('-').reduce((acc, cur) => {
				if (cur === '') return acc;
				return acc + capitalizeFirst(cur);
			}, '')}`;
			const dotNotationPath = `${replacedHyphenPath.split('/').reduce((acc, cur) => {
				if (cur === '') return acc;
				return acc + '.' + capitalizeFirst(cur);
			}, '')}`;

			let responseType = `Api.${capitalizeFirst(
				version
			)}${dotNotationPath}.${capitalizeFirst(route.method.toLowerCase())}.Res`;
			if (route.responseType) {
				if (['string', 'boolean', 'number'].includes(route.responseType))
					responseType = route.responseType;
				else responseType = `CustomTypes.${route.responseType}`;
			}

			let isMultiResponse = ['ARRAY', 'CUSTOM_ARRAY'].includes(route.type);
			if (isMultiResponse) responseType += '[]';

			const isPagedResponse = route.type === 'PAGED' || route.type === 'CUSTOM_PAGED';

			let requestType = route.requestType
				? `CustomTypes.${route.requestType}`
				: `Api.${capitalizeFirst(version)}${dotNotationPath}.${capitalizeFirst(
						route.method.toLowerCase()
					)}.Req`;
			// Now see if there is any request data
			if (!route.requestType && route.request.length === 0) requestType = '';

			apiFileContent += `\t/**\n`;
			apiFileContent += `\t * ${route.description}\n`;
			apiFileContent += `\t * @summary ${route.name} \n`;
			apiFileContent += `\t */\n`;

			if (isPagedResponse) {
				apiFileContent += `\texport async function ${functionName}(${
					requestType ? `req: ${requestType},` : ''
				} alternativeFetch?: typeof fetch) : Promise<RedSky.RsPagedResponseData<${responseType}[]>> {\n`;

				// API REQUEST function body
				apiFileContent += `\t\tconst res = await http.${route.method.toLowerCase()}<RedSky.RsPagedResponseData<${responseType}[]>, ${
					requestType ? requestType : 'void'
				}>('${route.path}'${requestType ? ', req, { alternativeFetch }' : ', undefined, { alternativeFetch }'});\n`;
				apiFileContent += `\t\treturn res;\n`;
			} else {
				apiFileContent += `\texport async function ${functionName}(${
					requestType ? `req: ${requestType},` : ''
				} alternativeFetch?: typeof fetch) : Promise<${responseType}> {\n`;

				// Actual function body
				apiFileContent += `\t\tconst res = await http.${route.method.toLowerCase()}<RedSky.RsResponseData<${responseType}>, ${
					requestType ? requestType : 'void'
				}>('${route.path}'${requestType ? ', req, { alternativeFetch }' : ', undefined, { alternativeFetch }'});\n`;
				apiFileContent += `\t\treturn res.data;\n`;
			}

			apiFileContent += `\t}\n\n`;
		}

		apiFileContent += '}\n';
	}

	fs.writeFileSync(join(generatedFolder, 'apiRequests.ts'), apiFileContent);
}

fetch(resturaConfig.schemaBaseUrl + '/restura/v1/schema/types', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		Accept: 'application/json, text/plain, */*',
		'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, PATCH',
		'x-auth-token': resturaConfig.authToken
	}
})
	.then((res) => {
		if (!res.ok) {
			throw new Error('Network response was not ok');
		}
		return res.json();
	})
	.then((data) => {
		if (!data || !data.schema || !data.api || !data.models) {
			console.error('Error: Invalid data received from server');
			process.exit(1);
		}
		fs.writeFileSync(join(generatedFolder, 'api.d.ts'), data.api);
		fs.writeFileSync(join(generatedFolder, 'models.d.ts'), data.models);
		generateApiAndHooksRequestsFromSchema(data.schema);
		console.log('Generated Files written to disk');
	})
	.catch((e) => {
		console.error(e.message);
		process.exit(1);
	});
