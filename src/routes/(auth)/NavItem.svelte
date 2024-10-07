<script lang="ts">
	interface Props {
		name: string;
		href: string;
		icon?: string;
		isActive: boolean;
	}

	const { name, href, icon, isActive }: Props = $props();

	const styledIcon = icon?.replace(
		'<svg',
		`<svg class="w-4 h-4 ${isActive ? 'fill-accent-foreground' : 'fill-muted-foreground'}"`
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
