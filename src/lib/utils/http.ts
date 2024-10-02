import { HttpClient } from './HttpClient';

export enum HttpStatusCode {
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	METHOD_NOT_ALLOWED = 405,
	CONFLICT = 409,
	VERSION_OUT_OF_DATE = 418, // Technically this is the I'm a teapot code that was a joke.
	SERVER_ERROR = 500,
	SERVICE_UNAVAILABLE = 503,
	NETWORK_CONNECT_TIMEOUT = 599
}

let baseUrl: string;

// Check if running in a browser environment
if (typeof window !== 'undefined') {
	baseUrl = window.location.origin;
	// console.log('window is defined: baseUrl: ', baseUrl);
} else {
	// Is this server side rendered?
	// Set a default value or handle the case where window is not defined
	baseUrl = 'http://localhost:5173'; // Example default value

	// console.log('window is NOT defined: baseUrl: ', baseUrl);
}

const http = new HttpClient(
	{
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/plain, */*',
			'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, PATCH'
		}
	},
	baseUrl
);

// const reAuthCheckIgnoredUrls = ['/user/re-auth'];

// function requiresReAuthorization(authTokens: AuthTokens): boolean {
// 	return new Date(authTokens.tokenExpiresOn) < new Date();
// }

http.addRequestIntercepter(async (request) => {
	return request;
});

http.addResponseIntercepter(async (response) => {
	return response;
});

export default http;
