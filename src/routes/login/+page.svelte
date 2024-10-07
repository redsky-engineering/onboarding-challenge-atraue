<script lang="ts">
	import image from '$lib/assets/images/image.webp';
	import image2x from '$lib/assets/images/image@2x.webp';
	import image3x from '$lib/assets/images/image@3x.webp';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { loginSchema } from '../../schema/login';
	import { zod } from 'sveltekit-superforms/adapters';
	import serviceFactory from '$lib/services/serviceFactory';
	import { FormControl, FormField, FormFieldErrors, FormLabel } from '$lib/components/ui/form';
	import { cn } from '$lib/utils';
	import { HttpError } from '$lib/utils/HttpClient';
	import Alert from '$lib/components/ui/alert/alert.svelte';
	import AlertTitle from '$lib/components/ui/alert/alert-title.svelte';
	import errorIcon from '$lib/assets/images/error.svg';

	let errorMessage: string | null = null;

	const form = superForm(defaults(zod(loginSchema)), {
		SPA: true,
		validators: zod(loginSchema),
		onUpdate: async (event) => {
			const { form } = event;
			if (form.valid) {
				const { email, password } = form.data;
				const userService = serviceFactory.get('UserService');

				try {
					await userService.loginUser(email, password);
				} catch (err) {
					if (err instanceof HttpError) {
						const { statusCode } = err;
						if (statusCode === 401) {
							errorMessage = 'Invalid email or password. Try again.';
						} else {
							errorMessage = 'An error occurred. Please try again later.';
						}
					}
					event.cancel();
				}
			}
		}
	});
	const { form: formData, errors, enhance } = form;
</script>

<div class="min-w-screen flex min-h-screen items-center justify-center">
	<div class="hidden w-[50vw] flex-col items-center justify-center desktop:flex">
		<img
			src={image}
			srcset="{image} 720w, {image2x} 1440w, {image3x} 2160w"
			sizes="(min-width: 1440px) 50vw,"
			alt="Background"
		/>
	</div>
	<div class="grid flex-grow place-items-center desktop:w-[50vw]">
		<div class="w-mobile p-6 desktop:p-4">
			<h1 class="mb-2 text-center font-inter text-2xl font-semibold text-card-foreground">Login</h1>
			<p class="mb-6 text-center font-inter text-sm font-normal text-muted-foreground">
				Enter your email below<br />to login to your account.
			</p>
			<form class="flex flex-col justify-center" method="POST" use:enhance>
				<FormField {form} name="email">
					<FormControl let:attrs>
						<FormLabel class="mb-1.5 block">Email</FormLabel>
						<Input
							{...attrs}
							class={cn('mb-4', { 'mb-1.5': $errors.email })}
							placeholder="name@example.com"
							type="email"
							bind:value={$formData.email}
						/>
					</FormControl>
					<FormFieldErrors class={cn({ 'mb-4': $errors.email })} />
				</FormField>
				<FormField {form} name="password">
					<FormControl let:attrs>
						<FormLabel class="mb-1.5 block">Password</FormLabel>
						<Input
							{...attrs}
							class={cn('mb-6', { 'mb-1.5': $errors.password })}
							type="password"
							bind:value={$formData.password}
						/>
					</FormControl>
					<FormFieldErrors class={cn({ 'mb-6': $errors.password })} />
				</FormField>
				<Button class="w-full" type="submit">Login</Button>
			</form>
			{#if errorMessage !== null}
				<Alert class="mt-6" variant="error"
					><img src={errorIcon} alt="Error icon" /><AlertTitle>{errorMessage}</AlertTitle></Alert
				>
			{/if}
		</div>
	</div>
</div>
