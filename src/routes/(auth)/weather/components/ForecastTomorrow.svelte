<script lang="ts">
	import ForecastItem from './ForecastItem.svelte';

	export let highTemp: number | null;
	export let lowTemp: number | null;

	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class={className}>
	<h3 class="text-lg font-inter font-medium mb-4 text-card-foreground">Tomorrow's Forecast</h3>
	<div class="grid grid-cols-[repeat(2,1fr)] desktop:grid-cols-[repeat(2,10rem)] gap-x-2 gap-y-4">
		<ForecastItem title="High" value={highTemp} unit="° F" />
		<ForecastItem title="Low" value={lowTemp} unit="° F" />
	</div>
</div>
