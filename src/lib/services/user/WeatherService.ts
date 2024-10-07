import { ApiRequestV1 } from '../../../generated/apiRequests';
import Service from '../Service';

export default class WeatherService extends Service {
	async getWeatherForLocation(
		latDecimal: number,
		longDecimal: number,
		appIdToken: string
	): Promise<CustomTypes.WeatherResponse> {
		const res = await ApiRequestV1.getWeather({
			latitude: latDecimal,
			longitude: longDecimal,
			token: appIdToken
		});
		return res;
	}
}
