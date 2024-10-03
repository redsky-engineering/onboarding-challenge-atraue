<script lang="ts">
	import { locationWeatherStore } from '../../../stores/locationWeather';
	import PageContent from '../PageContent.svelte';
	import LocationCard from './LocationCard.svelte';
	import ResultsCard from './ResultsCard.svelte';

	let currentTemp: number | null = null;
	let highTemp: number | null = null;
	let lowTemp: number | null = null;
	let sunrise: string | null = null;
	let sunset: string | null = null;
	let pressure: number | null = null;
	let humidity: number | null = null;
	let wind: number | null = null;

	locationWeatherStore.subscribe((value) => {
		if (value) {
			currentTemp = value.currentTemperatureF;
			highTemp = value.tomorrowHighF;
			lowTemp = value.tomorrowLowF;
			sunrise = value.sunrise;
			sunset = value.sunset;
			pressure = value.pressure;
			humidity = value.humidityPercent;
			wind = value.windSpeedMph;
		}
	});
</script>

<PageContent class="justify-start desktop:flex-row desktop:items-start">
	<LocationCard />
	<ResultsCard {currentTemp} {highTemp} {lowTemp} {sunrise} {sunset} {pressure} {humidity} {wind} />
</PageContent>
