<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { FormControl, FormField, FormFieldErrors, FormLabel } from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { locationSchema } from '../../../../schema/location';
	import { zod } from 'sveltekit-superforms/adapters';
	import serviceFactory from '$lib/services/serviceFactory';
	import { convertLatitudeToDecimal, convertLongitudeToDecimal } from '../location-utils';
	import { locationWeatherStore } from '../../../../stores/locationWeather';
	import { cn } from '$lib/utils';

	const form = superForm(defaults(zod(locationSchema)), {
		SPA: true,
		validators: zod(locationSchema),
		onUpdate: async ({ form }) => {
			if (form.valid){
				const weatherService = serviceFactory.get('WeatherService');
				const { latitude, longitude, appIdToken } = form.data;
				const latDecimal = convertLatitudeToDecimal(latitude);
				const longDecimal = convertLongitudeToDecimal(longitude);
				const res = await weatherService.getWeatherForLocation(latDecimal, longDecimal, appIdToken);
				if (res){
					locationWeatherStore.set(res);
				}
			}
		}
	});
	const { form: formData, errors, enhance } = form;
</script>

<Card.Root class="max-w-[22.5rem]">
	<Card.Header>
		<Card.Title tag="h2">Location</Card.Title>
		<Card.Description
			>Enter the latitude and longitude of the location you wish to see weather results for.
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST" use:enhance>
			<FormField {form} name="latitude">
				<FormControl>
					<FormLabel class="block mb-1.5">Latitude</FormLabel>
					<Input class={cn('mb-6', { 'mb-1.5': $errors.latitude })} type="text" bind:value={$formData.latitude} />
				</FormControl>
				<FormFieldErrors class={cn({ 'mb-6': $errors.latitude })}  />
			</FormField>
			<FormField {form} name="longitude">
				<FormControl>
					<FormLabel class="block mb-1.5">Longitude</FormLabel>
					<Input class={cn('mb-6', { 'mb-1.5': $errors.longitude })} type="text" bind:value={$formData.longitude} />
				</FormControl>
				<FormFieldErrors class={cn({ 'mb-6': $errors.longitude })}  />
			</FormField>
			<FormField {form} name="appIdToken">
				<FormControl>
					<FormLabel class="block mb-1.5">App ID Token</FormLabel>
					<Input class={cn('mb-6', { 'mb-1.5': $errors.appIdToken })} type="text" bind:value={$formData.appIdToken} />
				</FormControl>
				<FormFieldErrors class={cn({ 'mb-6': $errors.appIdToken })}  />
			</FormField>
			<Button class="w-full" type="submit">Submit</Button>
		</form>
	</Card.Content>
</Card.Root>
