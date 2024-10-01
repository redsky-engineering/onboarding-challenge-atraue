import http from '$lib/utils/http';

/**
 * V1 Endpoints
 * @summary V1 
 */
export namespace ApiRequestV1 {
	/**
	 * Get my user
	 * @summary get my user 
	 */
	export async function getUserMe( alternativeFetch?: typeof fetch) : Promise<Api.V1.User.Me.Get.Res> {
		const res = await http.get<RedSky.RsResponseData<Api.V1.User.Me.Get.Res>, void>('/user/me', undefined, { alternativeFetch });
		return res.data;
	}

	/**
	 * User login endpoint
	 * @summary Login 
	 */
	export async function postUserLogin(req: Api.V1.User.Login.Post.Req, alternativeFetch?: typeof fetch) : Promise<CustomTypes.AuthResponse> {
		const res = await http.post<RedSky.RsResponseData<CustomTypes.AuthResponse>, Api.V1.User.Login.Post.Req>('/user/login', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Refresh an old, possibly expired token and returns a new token.
	 * @summary Refreshes a Token 
	 */
	export async function postUserRefreshToken( alternativeFetch?: typeof fetch) : Promise<CustomTypes.AuthResponse> {
		const res = await http.post<RedSky.RsResponseData<CustomTypes.AuthResponse>, void>('/user/refresh-token', undefined, { alternativeFetch });
		return res.data;
	}

	/**
	 * Request to change email. Sends a verification email with pin
	 * @summary Change Email Request 
	 */
	export async function postUserChangeEmail(req: Api.V1.User.ChangeEmail.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.ChangeEmail.Post.Req>('/user/change-email', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Commits an email change with a pin
	 * @summary Commit Email Change 
	 */
	export async function patchUserChangeEmailCommit(req: Api.V1.User.ChangeEmail.Commit.Patch.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.patch<RedSky.RsResponseData<boolean>, Api.V1.User.ChangeEmail.Commit.Patch.Req>('/user/change-email/commit', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Creates a user
	 * @summary Create User 
	 */
	export async function postUser(req: Api.V1.User.Post.Req, alternativeFetch?: typeof fetch) : Promise<CustomTypes.FilteredUser> {
		const res = await http.post<RedSky.RsResponseData<CustomTypes.FilteredUser>, Api.V1.User.Post.Req>('/user', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Update an existing user.
	 * @summary Update User 
	 */
	export async function patchUser(req: Api.V1.User.Patch.Req, alternativeFetch?: typeof fetch) : Promise<CustomTypes.FilteredUser> {
		const res = await http.patch<RedSky.RsResponseData<CustomTypes.FilteredUser>, Api.V1.User.Patch.Req>('/user', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * User logout endpoint
	 * @summary Logout 
	 */
	export async function postUserLogout( alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, void>('/user/logout', undefined, { alternativeFetch });
		return res.data;
	}

	/**
	 * Checks if a given username or email or both are available or not
	 * @summary Check Available 
	 */
	export async function postUserCheckAvailable(req: Api.V1.User.CheckAvailable.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.CheckAvailable.Post.Req>('/user/check-available', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Verifies a user password to get past security checkpoints
	 * @summary Verify User Password 
	 */
	export async function postUserVerifyPassword(req: Api.V1.User.VerifyPassword.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.VerifyPassword.Post.Req>('/user/verify-password', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Resend the email that sends out the verify email pin
	 * @summary Resend Verify Email Pin 
	 */
	export async function postUserResendVerifyEmail( alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, void>('/user/resend-verify-email', undefined, { alternativeFetch });
		return res.data;
	}

	/**
	 * Sends a forgot password request
	 * @summary Forgot Password 
	 */
	export async function postUserForgotPassword(req: Api.V1.User.ForgotPassword.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.ForgotPassword.Post.Req>('/user/forgot-password', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Changes a password of the user
	 * @summary Change Password 
	 */
	export async function postUserChangePassword(req: Api.V1.User.ChangePassword.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.ChangePassword.Post.Req>('/user/change-password', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Resets a password using a reset password guid
	 * @summary Reset Password 
	 */
	export async function postUserResetPassword(req: Api.V1.User.ResetPassword.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.ResetPassword.Post.Req>('/user/reset-password', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Verifies an email given a pin
	 * @summary Verify Email 
	 */
	export async function postUserVerifyEmail(req: Api.V1.User.VerifyEmail.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.VerifyEmail.Post.Req>('/user/verify-email', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Deletes the user that calls this. This is a post so we don't show password on url.
	 * @summary Delete Me 
	 */
	export async function postUserDeleteMe(req: Api.V1.User.Delete.Me.Post.Req, alternativeFetch?: typeof fetch) : Promise<boolean> {
		const res = await http.post<RedSky.RsResponseData<boolean>, Api.V1.User.Delete.Me.Post.Req>('/user/delete/me', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Update my user
	 * @summary Update my user 
	 */
	export async function patchUserMe(req: Api.V1.User.Me.Patch.Req, alternativeFetch?: typeof fetch) : Promise<Api.V1.User.Me.Patch.Res> {
		const res = await http.patch<RedSky.RsResponseData<Api.V1.User.Me.Patch.Res>, Api.V1.User.Me.Patch.Req>('/user/me', req, { alternativeFetch });
		return res.data;
	}

	/**
	 * Gets the weather data from openweather.org
	 * @summary Get Weather Data 
	 */
	export async function getWeather(req: Api.V1.Weather.Get.Req, alternativeFetch?: typeof fetch) : Promise<CustomTypes.WeatherResponse> {
		const res = await http.get<RedSky.RsResponseData<CustomTypes.WeatherResponse>, Api.V1.Weather.Get.Req>('/weather', req, { alternativeFetch });
		return res.data;
	}

}
