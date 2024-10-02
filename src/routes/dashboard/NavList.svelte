<script lang="ts">
	import NavItem from "./NavItem.svelte";

	interface Link {
		name: string;
		href: string;
		icon?: string;
	}

	export let links: Link[];

    let currentPage = "";
</script>

<ul class="flex flex-col gap-x-2 w-full">
	{#each links as { name, href, icon }, i}
		<NavItem {name} {href} {icon} isActive={href === currentPage} />
	{/each}
</ul>
