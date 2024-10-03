<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import ForecastItem from './ForecastItem.svelte';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={className}>
	<h3 class="text-lg font-inter font-medium mb-4 text-card-foreground">Today's Forecast</h3>
	<div class="grid grid-cols-[10rem_10rem]">
		<ForecastItem title="High" value="30" />
		<ForecastItem title="Low" value="20" />
	</div>
</div>
