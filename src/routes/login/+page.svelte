<script lang="ts">
	import image from '$lib/assets/images/image.webp';
	import image2x from '$lib/assets/images/image@2x.webp';
	import image3x from '$lib/assets/images/image@3x.webp';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { loginSchema } from '../../schema/login';
	import { zod } from 'sveltekit-superforms/adapters';
	import serviceFactory from '$lib/services/serviceFactory';

	const { form, errors, enhance } = superForm(defaults(zod(loginSchema)), {
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
				<Label class="mb-1.5" for="email">Email</Label>
				<Input
					class={$errors.email ? 'mb-1.5' : 'mb-4'}
					type="email"
					id="email"
					name="email"
					placeholder="name@example.com"
					bind:value={$form.email}
					aria-invalid={$errors.email ? 'true' : undefined}
				/>
				{#if $errors.email}<span class="font-inter text-xs font-normal text-destructive mb-4"
						>{$errors.email}</span
					>{/if}
				<Label class="mb-1.5" for="password">Password</Label>
				<Input
					class={$errors.password ? 'mb-1.5' : 'mb-6'}
					type="password"
					id="password"
					name="password"
					bind:value={$form.password}
					aria-invalid={$errors.password ? 'true' : undefined}
				/>
				{#if $errors.password}<span class="font-inter text-xs font-normal text-destructive mb-6"
						>{$errors.password}</span
					>{/if}
				<Button class="w-full" type="submit">Login</Button>
			</form>
		</div>
	</div>
</div>
