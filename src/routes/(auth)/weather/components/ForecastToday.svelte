<script lang="ts">
	import ForecastItem from './ForecastItem.svelte';

	interface Props {
		currentTemp: number | null;
		sunrise: string | null;
		sunset: string | null;
		pressure: number | null;
		humidity: number | null;
		wind: number | null;
		class?: string;
	}

	const { currentTemp, sunrise, sunset, pressure, humidity, wind, class: className }: Props = $props();
</script>

<div class={className}>
	<h3 class="font-inter text-lg font-medium text-card-foreground mb-4">Today's Forecast</h3>
	<div class="grid grid-cols-[repeat(3,1fr)] desktop:grid-cols-[repeat(3,10rem)] gap-x-2 gap-y-4">
		<ForecastItem class="col-span-2" title="Current Temperature" value={currentTemp} unit="° F" />
		<div></div>
		<div class="col-span-3 flex gap-x-2 desktop:contents">
		<ForecastItem class="w-[50%] desktop:w-fit" title="Sunrise" value={sunrise} unit="am" />
		<ForecastItem class="w-[50%] desktop:w-fit desktop:col-span-2" title="Sunset" value={sunset} unit="pm" />
		</div>
		<ForecastItem title="Pressure" value={pressure} unit="hPa" />
		<ForecastItem title="Humidity" value={humidity} unit="%" />
		<ForecastItem title="Wind" value={wind} unit="mph" />
	</div>
</div>
