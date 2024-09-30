import UserService from './UserService';

export type ServiceTypes = {
	UserService: UserService;
};

class ServiceFactory {
	private serviceMap: ServiceTypes;

	constructor() {
		this.serviceMap = {} as ServiceTypes;
	}

	init() {
		this.serviceMap = {
			UserService: new UserService()
		};

		let key: keyof ServiceTypes;
		for (key in this.serviceMap) {
			this.serviceMap[key].start();
		}
	}

	get(key: keyof ServiceTypes) {
		return this.serviceMap[key];
	}
}

const serviceFactory = new ServiceFactory();
export default serviceFactory;
