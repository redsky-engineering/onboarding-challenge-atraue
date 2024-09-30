<script lang="ts">
	import image from '$lib/assets/images/image.webp';
	import image2x from '$lib/assets/images/image@2x.webp';
	import image3x from '$lib/assets/images/image@3x.webp';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
</script>

<div class="min-w-screen min-h-screen flex justify-center items-center">
	<div class="hidden desktop:flex flex-col items-center justify-center">
		<div class="w-desktop">
			<img src={image} srcset="{image} 1x, {image2x} 2x, {image3x} 3x" alt="Background" />
		</div>
	</div>
	<div class="desktop:w-desktop desktop:max-w-desktop flex flex-grow flex-col items-center justify-center">
		<div class="w-mobile p-6">
			<h1 class="text-center text-2xl font-semibold font-inter text-card-foreground mb-2">Login</h1>
			<p class="text-center mb-6 text-muted-foreground">Enter your email below<br/>to login to your account</p>
			<form class="flex flex-col justify-center" method="POST">
                <Label class="mb-1.5" for="email">Email</Label>
				<Input class="mb-4" type="email" id="email" name="email" placeholder="name@example.com" />
                <Label class="mb-1.5" for="password">Password</Label>
                <Input class="mb-6" type="password" id="password" name="password" />
				<Button class="w-full" type="submit">Login</Button>
			</form>
		</div>
	</div>
</div>
