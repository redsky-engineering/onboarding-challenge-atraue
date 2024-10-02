<script lang="ts">
	export let name: string;
	export let href: string;
	export let icon: string | undefined;
	export let isActive: boolean;

	const styledIcon = icon?.replace(
		'<svg',
		`<svg class="w-10 h-10 ${isActive ? 'fill-accent-foreground' : 'fill-muted-foreground'}"`
	);
</script>

<li class="rounded-lg p-2.5 {isActive ? 'bg-primary-foreground' : ''}">
	<a class="flex items-center gap-x-2" {href}>
		{#if icon}
			{@html styledIcon}
		{/if}
		<span class="font-inter text-lg font-semibold {isActive ? "text-foreground" : "text-muted-foreground"}">{name}</span>
	</a>
</li>
