<script lang="ts">
	import ForecastItem from './ForecastItem.svelte';

	export let currentTemp: number | null;
	export let sunrise: string | null;
	export let sunset: string | null;
	export let pressure: number | null;
	export let humidity: number | null;
	export let wind: number | null;

	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class={className}>
	<h3 class="mb-4 font-inter text-lg font-medium text-card-foreground">Tomorrow's Forecast</h3>
	<div class="grid grid-cols-[10rem_10rem_10rem]">
		<ForecastItem title="Current Temperature" value={currentTemp} unit="° F" />
		<div></div>
		<div></div>
		<ForecastItem title="Sunrise" value={sunrise} unit="am" />
		<ForecastItem title="Sunset" value={sunset} unit="pm" />
		<div></div>
		<ForecastItem title="Pressure" value={pressure} unit="hPa" />
		<ForecastItem title="Humidity" value={humidity} unit="%" />
		<ForecastItem title="Wind" value={wind} unit="mph" />
	</div>
</div>
