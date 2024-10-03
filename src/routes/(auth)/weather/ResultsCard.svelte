<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import ForecastToday from './ForecastToday.svelte';
	import ForecastTomorrow from './ForecastTomorrow.svelte';
</script>

<Card.Root class="max-w-[45.5rem]">
	<Card.Header>
		<Card.Title tag="h2">Results</Card.Title>
		<Card.Description
			>Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analytics
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<ForecastToday class="mb-6"/>
		<ForecastTomorrow/>
	</Card.Content>
</Card.Root>
