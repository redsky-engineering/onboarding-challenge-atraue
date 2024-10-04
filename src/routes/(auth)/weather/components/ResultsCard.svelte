<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import ForecastToday from './ForecastToday.svelte';
	import ForecastTomorrow from './ForecastTomorrow.svelte';

	export let currentTemp: number | null;
	export let sunrise: string | null;
	export let sunset: string | null;
	export let pressure: number | null;
	export let humidity: number | null;
	export let wind: number | null;
	export let highTemp: number | null;
	export let lowTemp: number | null;
</script>

<Card.Root class="w-full max-w-[45.5rem]">
	<Card.Header>
		<Card.Title tag="h2">Results</Card.Title>
		<Card.Description
			>Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
		</Card.Description>
	</Card.Header>
	<Card.Content class="pt-0 pb-6">
		<ForecastToday class="mb-6" {currentTemp} {sunrise} {sunset} {pressure} {humidity} {wind} />
		<ForecastTomorrow {highTemp} {lowTemp} />
	</Card.Content>
</Card.Root>
