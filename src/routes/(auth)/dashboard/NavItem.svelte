<script lang="ts">
	import { cn } from '$lib/utils';

	interface NavItemProps {
		name: string;
		href: string;
		icon?: string;
		isActive: boolean;
	}

	let { name, href, icon, isActive }: NavItemProps = $props();

	const styledIcon = icon?.replace(
		'<svg',
		`<svg class="${cn('w-4 h-4 fill-muted-foreground', { 'fill-accent-foreground': isActive })}"`
	);
</script>

<li class={cn('rounded-lg p-2.5', { 'bg-primary-foreground': isActive })}>
	<a class="flex items-center gap-x-2" {href}>
		{#if icon}
			{@html styledIcon}
		{/if}
		<span
			class={cn('font-inter text-lg font-semibold text-muted-foreground', {
				'text-foreground': isActive
			})}>{name}</span
		>
	</a>
</li>
