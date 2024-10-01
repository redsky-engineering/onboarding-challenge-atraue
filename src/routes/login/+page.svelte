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

	const form = superForm(defaults(zod(loginSchema)), {
		SPA: true,
		validators: zod(loginSchema),
		onUpdate: async ({ form }) => {
			if (form.valid) {
				const { email, password } = form.data;
				const userService = serviceFactory.get('UserService');
				await userService.loginUser(email, password);
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
	<div class="flex flex-grow flex-col items-center justify-center desktop:w-[50vw]">
		<div class="w-mobile p-6 desktop:p-4">
			<h1 class="mb-2 text-center font-inter text-2xl font-semibold text-card-foreground">Login</h1>
			<p class="mb-6 text-center font-inter text-sm font-normal text-muted-foreground">
				Enter your email below<br />to login to your account
			</p>
			<form class="flex flex-col justify-center" method="POST" use:enhance>
				<FormField {form} name="email">
					<FormControl let:attrs>
						<FormLabel class="block mb-1.5">Email</FormLabel>
						<Input
							{...attrs}
							class={$errors.email ? "mb-1.5" : "mb-4"}
							placeholder="name@example.com"
							type="email"
							bind:value={$formData.email}
						/>
					</FormControl>
					<FormFieldErrors class={$errors.email ? "mb-4" : ""} />
				</FormField>
				<FormField {form} name="password">
					<FormControl let:attrs>
						<FormLabel class="block mb-1.5">Password</FormLabel>
						<Input {...attrs} class={$errors.password ? "mb-1.5" : "mb-6"} type="password" bind:value={$formData.password} />
					</FormControl>
					<FormFieldErrors class={$errors.password ? "mb-6" : ""} />
				</FormField>
				<Button class="w-full" type="submit">Login</Button>
			</form>
		</div>
	</div>
</div>
