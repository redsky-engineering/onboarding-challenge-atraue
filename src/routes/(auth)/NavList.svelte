<script lang="ts">
	import NavItem from "./NavItem.svelte";
    import { page } from '$app/stores';

	interface Link {
		name: string;
		href: string;
		icon?: string;
	}

	export let links: Link[];

    let currentUrl;

    $: currentUrl = $page.url.href;
</script>

<ul class="flex flex-col gap-y-2 w-full">
	{#each links as { name, href, icon }}
		<NavItem {name} {href} {icon} isActive={currentUrl.endsWith(href)} />
	{/each}
</ul>
