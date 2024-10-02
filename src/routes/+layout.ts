import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';
import { userStore } from '../stores/users';
import { redirect } from '@sveltejs/kit';
import { ApiRequestV1 } from '../generated/apiRequests';

export const ssr = false;
export const prerender = true;

const unprotectedRoutes: string[] = ['', '/', '/login'];

function isUnprotectedRoute(pathname: string) {
	for (const route of unprotectedRoutes) {
		if (route.endsWith('*') && pathname.startsWith(route.slice(0, -1))) return true;
		if (pathname === route) return true;
	}
	return false;
}

export const load: LayoutLoad = async (event) => {
	let user = get(userStore);
	if (!user) {
		try {
			const myUser = await ApiRequestV1.getUserMe();
			userStore.set(myUser);
		} catch (e) {
			console.error('failed to fetch user', e);
		}
	}

	if (user && event.url.pathname === '/login') {
		throw redirect(302, '/dashboard');
	} else if (!user && !isUnprotectedRoute(event.url.pathname)) {
		throw redirect(302, '/login');
	}

	return { user };
};
