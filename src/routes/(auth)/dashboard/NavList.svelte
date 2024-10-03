<script lang="ts">
	import NavItem from './NavItem.svelte';
	import { page } from '$app/stores';

	interface Link {
		name: string;
		href: string;
		icon?: string;
	}

	interface NavItemProps {
		links: Link[];
	}

	let { links }: NavItemProps = $props();
</script>

<ul class="flex w-full flex-col gap-y-2">
	{#each links as { name, href, icon }}
		<NavItem {name} {href} {icon} isActive={($page.url.href).endsWith(href)} />
	{/each}
</ul>
