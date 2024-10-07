<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		title: string;
		value: string | number | null;
		unit?: string;
		class?: string;
	}

	const { title, value, unit, class: className }: Props = $props();

	let formattedValue = $derived(formatValue(value, unit));

	function formatValue(value: string | number | null, unit: string | undefined): string {
		if (value === null) {
			return '-';
		}
		if (typeof value === 'number') {
			return `${value} ${unit}`;
		}

		return value;
	}
</script>

<div class={cn('flex flex-col', className)}>
	<h4 class="mb-2 font-inter text-sm font-normal text-muted-foreground">{title}</h4>
	<p class="font-inter text-base font-medium">{formattedValue}</p>
</div>
