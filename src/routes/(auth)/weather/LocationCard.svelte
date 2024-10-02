<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { FormControl, FormField, FormFieldErrors, FormLabel } from '$lib/components/ui/form';
	import Input from '$lib/components/ui/input/input.svelte';
	import { defaults, superForm } from 'sveltekit-superforms';
    import { locationSchema } from '../../../schema/location';
	import { zod } from 'sveltekit-superforms/adapters';

	const form = superForm(defaults(zod(locationSchema)), {
        SPA: true,
        validators: zod(locationSchema),
        onUpdate: ({ form}) => {
            console.log(form);
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
		<form class="flex flex-col gap-y-6" method="POST" use:enhance>
			<FormField {form} name="latitude">
				<FormControl>
					<FormLabel>Latitude</FormLabel>
					<Input type="text" bind:value={$formData.latitude} />
				</FormControl>
				<FormFieldErrors />
			</FormField>
            			<FormField {form} name="longitude">
				<FormControl>
					<FormLabel>Longitude</FormLabel>
					<Input type="text" bind:value={$formData.longitude} />
				</FormControl>
				<FormFieldErrors />
			</FormField>
			<FormField {form} name="appIdToken">
				<FormControl>
					<FormLabel>App ID Token</FormLabel>
					<Input type="text" bind:value={$formData.appIdToken} />
				</FormControl>
				<FormFieldErrors />
			</FormField>
			<Button class="w-full" type="submit">Submit</Button>
		</form>
	</Card.Content>
</Card.Root>
