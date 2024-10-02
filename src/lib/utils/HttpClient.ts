import { MiscUtils, ObjectUtils } from '@redskytech/core-utils';

interface HttpRequestOptions {
	config?: RequestInit;
	alternativeFetch?: typeof fetch;
}

/** HTTP client performs HTTP requests */
export class HttpClient {
	private config: RequestInit;
	private baseUrl: string;
	private apiUrl: string;

	private requestInterceptors: ((request: Request) => Promise<Request>)[] = [];
	private responseInterceptors: ((response: Response) => Promise<Response>)[] = [];

	constructor(config?: RequestInit, baseUrl?: string) {
		this.config = config || {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		this.baseUrl = baseUrl || '';
		this.apiUrl = '/api/v1';
	}

	/**
	 * Adds a request interceptor to the HttpClient.
	 * @param onBeforeRequest - A function that will be called before the request is sent.
	 *                      It takes a Request object as a parameter and returns a Promise of a modified Request object.
	 */
	addRequestIntercepter(onBeforeRequest: (request: Request) => Promise<Request>): void {
		this.requestInterceptors.push(onBeforeRequest);
	}

	/**
	 * Removes a request interceptor from the HttpClient.
	 * @param onBeforeRequest - The callback function to be removed as a request interceptor.
	 */
	removeRequestIntercepter(onBeforeRequest: (request: Request) => Promise<Request>): void {
		const index = this.requestInterceptors.indexOf(onBeforeRequest);
		if (index !== -1) {
			this.requestInterceptors.splice(index, 1);
		}
	}

	/**
	 * Adds a response interceptor to the HttpClient.
	 * @param onResponse - The callback function to be executed when a response is received.
	 */
	addResponseIntercepter(onResponse: (response: Response) => Promise<Response>): void {
		this.responseInterceptors.push(onResponse);
	}

	/**
	 * Removes a response interceptor from the HttpClient.
	 * @param onResponse - The response interceptor function to remove.
	 */
	removeResponseIntercepter(onResponse: (response: Response) => Promise<Response>): void {
		const index = this.responseInterceptors.indexOf(onResponse);
		if (index !== -1) {
			this.responseInterceptors.splice(index, 1);
		}
	}

	/**
	 * Changes the configuration of the HttpClient.
	 * @param config - The new configuration for the HttpClient.
	 */
	changeConfig(config: RequestInit): void {
		this.config = config;
	}

	/**
	 * Returns the current configuration object for the HttpClient.
	 * @returns {RequestInit} The current configuration object.
	 */
	currentConfig(): RequestInit {
		return ObjectUtils.clone(this.config);
	}

	/**
	 * Sends a GET request to the specified URL with optional data.
	 * @param url - The URL to send the request to.
	 * @param data - Optional data to include in the request URL.
	 * @returns A Promise that resolves to the response from the server.
	 */
	get<T, U>(url: string, data?: U, httpRequestOptions?: HttpRequestOptions): Promise<T> {
		const finalConfig = httpRequestOptions?.config ?? this.config;
		if (data) {
			url += '?' + ObjectUtils.serialize(data);
		}

		const requestOptions: RequestInit = { credentials: 'include', method: 'GET', ...finalConfig };
		return this.fetchWithInterceptors<T>(url, requestOptions, httpRequestOptions);
	}

	/**
	 * Sends a POST request to the specified URL with optional data.
	 * @param url - The URL to send the request to.
	 * @param data - The optional data to include in the request body.
	 * @returns A Promise that resolves to the response data.
	 */
	post<T, U>(url: string, data?: U, httpRequestOptions?: HttpRequestOptions): Promise<T> {
		const finalConfig = httpRequestOptions?.config ?? this.config;
		const requestOptions: RequestInit = {
			credentials: 'include',
			method: 'POST',
			...finalConfig,
			...(data && { body: JSON.stringify(data) })
		};
		return this.fetchWithInterceptors<T>(url, requestOptions, httpRequestOptions);
	}

	/**
	 * Sends a PUT request to the specified URL with optional data.
	 * @param url - The URL to send the request to.
	 * @param data - The optional data to include in the request body.
	 * @returns A Promise that resolves to the response data.
	 */
	put<T, U>(url: string, data?: U, httpRequestOptions?: HttpRequestOptions): Promise<T> {
		const finalConfig = httpRequestOptions?.config ?? this.config;
		const requestOptions: RequestInit = {
			credentials: 'include',
			method: 'PUT',
			...finalConfig,
			...(data && { body: JSON.stringify(data) })
		};
		return this.fetchWithInterceptors<T>(url, requestOptions, httpRequestOptions);
	}

	/**
	 * Sends a PATCH request to the specified URL with optional data and configuration.
	 * @param url - The URL to send the PATCH request to.
	 * @param data - The data to include in the request body.
	 * @param config - The additional configuration options for the request.
	 * @returns A Promise that resolves to the response data of type T.
	 */
	patch<T, U>(url: string, data?: U, httpRequestOptions?: HttpRequestOptions): Promise<T> {
		const finalConfig = httpRequestOptions?.config ?? this.config;

		const requestOptions: RequestInit = {
			credentials: 'include',
			method: 'PATCH',
			...finalConfig,
			...(data && { body: JSON.stringify(data) })
		};
		return this.fetchWithInterceptors<T>(url, requestOptions, httpRequestOptions);
	}

	delete<T, U>(url: string, data?: U, httpRequestOptions?: HttpRequestOptions): Promise<T> {
		if (data) {
			url += '?' + ObjectUtils.serialize(data);
		}

		const finalConfig = httpRequestOptions?.config ?? this.config;

		const requestOptions: RequestInit = {
			credentials: 'include',
			method: 'DELETE',
			...finalConfig
		};
		return this.fetchWithInterceptors<T>(url, requestOptions, httpRequestOptions);
	}

	private async fetchWithInterceptors<T>(
		relativeUrl: string,
		init?: RequestInit,
		httpRequestOptions?: HttpRequestOptions
	): Promise<T> {
		// Construct the full URL using the base URL and the relative URL
		const fullURL = new URL(this.apiUrl + relativeUrl, this.baseUrl).href;

		let request = new Request(fullURL, init);

		for (const interceptor of this.requestInterceptors) {
			request = await interceptor(request);
		}

		let response: Response;
		try {
			response = await (httpRequestOptions?.alternativeFetch || fetch)(request);
		} catch (error) {
			throw new Error('Network error');
		}

		for (const interceptor of this.responseInterceptors) {
			response = await interceptor(response);
		}

		if (!response.ok) {
			throw new HttpError(response);
		}

		try {
			return (await response.json()) as T;
		} catch (error) {
			throw new HttpError(response);
		}
	}
}

export class HttpError {
	statusCode: number;
	message: string;
	constructor(public response: Response) {
		this.statusCode = response.status;
		this.message = response.statusText;
	}

	getResponseBody(): Promise<unknown> {
		return this.response.json();
	}

	async getResponseErrorMsg(defaultMsg = 'An error occurred'): Promise<string> {
		const responseBody = await this.getResponseBody();
		return MiscUtils.getRsErrorMessage(responseBody, defaultMsg);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static isHttpError(error: any): error is HttpError {
		return error instanceof HttpError;
	}
}
