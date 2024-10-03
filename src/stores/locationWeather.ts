import { writable } from 'svelte/store';

export const locationWeatherStore = writable<Api.V1.Weather.Get.Res | undefined>(undefined);
