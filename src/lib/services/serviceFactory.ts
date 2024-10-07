import UserService from './user/UserService';
import WeatherService from './user/WeatherService';

export type ServiceTypes = {
	UserService: UserService;
	WeatherService: WeatherService;
};

class ServiceFactory {
	private serviceMap?: ServiceTypes;

	init() {
		this.serviceMap = {
			UserService: new UserService(),
			WeatherService: new WeatherService()
		};

		let key: keyof ServiceTypes;
		for (key in this.serviceMap) {
			this.serviceMap[key].start();
		}
	}

	get<K extends keyof ServiceTypes>(key: K): ServiceTypes[K] {
		if (!this.serviceMap) {
			throw new Error('ServiceFactory not initialized');
		}

		return this.serviceMap[key];
	}
}

const serviceFactory = new ServiceFactory();
export default serviceFactory;
