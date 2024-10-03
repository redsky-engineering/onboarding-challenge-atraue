import { writable } from 'svelte/store';

export const userStore = writable<Api.V1.User.Me.Get.Req | undefined>(undefined);
