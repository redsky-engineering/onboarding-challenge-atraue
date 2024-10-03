import { MiscUtils } from '@redskytech/core-utils';
import { ApiRequestV1 } from '../../../generated/apiRequests';
import Service from '../Service';

export default class UserService extends Service {
	async loginUser(username: string, password: string) {
		const encodedPassword = await MiscUtils.sha256Encode(password);
		await ApiRequestV1.postUserLogin({
			username,
			password: encodedPassword
		});
	}
}
