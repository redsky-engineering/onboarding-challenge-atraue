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

	const { form, errors, enhance} = superForm(defaults(zod(loginSchema)), {
		SPA: true,
		onUpdate: async ({form}) => {
			const { email, password } = form.data;
			const userService = serviceFactory.get("UserService");
			await userService.loginUser(email, password);
		}
	});
</script>

<div class="min-w-screen min-h-screen flex justify-center items-center">
	<div class="hidden desktop:flex flex-col items-center justify-center w-[50vw]">
		<img src={image} srcset="{image} 720w, {image2x} 1440w, {image3x} 2160w" sizes="(min-width: 1440px) 50vw," alt="Background" />
	</div>
	<div class="desktop:w-[50vw] flex flex-grow flex-col items-center justify-center">
		<div class="w-mobile p-6">
			<h1 class="text-center text-2xl font-semibold font-inter text-card-foreground mb-2">Login</h1>
			<p class="text-center mb-6 text-muted-foreground">Enter your email below<br/>to login to your account</p>
			<form class="flex flex-col justify-center" method="POST" use:enhance>
                <Label class="mb-1.5" for="email">Email</Label>
				<Input class="mb-4" type="email" id="email" name="email" placeholder="name@example.com" bind:value={$form.email} />
                <Label class="mb-1.5" for="password">Password</Label>
                <Input class="mb-6" type="password" id="password" name="password" bind:value={$form.password} />
				<Button class="w-full" type="submit">Login</Button>
			</form>
		</div>
	</div>
</div>
