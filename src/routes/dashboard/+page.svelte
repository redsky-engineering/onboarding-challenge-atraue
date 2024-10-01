<script lang="ts">
	import icon from '$lib/assets/images/li-layout-dashboard.svg';
	import menuIcon from '$lib/assets/images/li-menu.svg';
	import avatarIcon from '$lib/assets/images/avatar.svg';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="min-w-screen bg-muted-opacity flex min-h-screen flex-col">
	<div class="border-b-1 flex border-border">
		<div class="w-[50vw] desktop:w-full p-4">
			<h1 class="font-inter text-xl font-semibold text-foreground desktop:text-3xl">Dashboard</h1>
		</div>
		<div class="border-l-1"></div>
		<div class="flex w-[50vw] desktop:w-auto items-center justify-end gap-x-2 px-4 py-3 text-nowrap">
			<img src={avatarIcon} alt="Avatar icon"/>
			<!-- <div class="font-inter text-base font-normal text-primary rounded-full bg-">JD</div> -->
			<div class="font-inter text-base font-medium text-foreground">John Doe</div>
			<Button class="desktop:hidden" variant="outline" size="sm"
				><img class="h-4 w-4" src={menuIcon} alt="Menu icon" /></Button
			>
		</div>
	</div>
	<div class="flex flex-grow flex-col items-center justify-center p-4">
		<img class="mb-4 h-24 w-24" src={icon} alt="Dashboard icon" />
		<h2 class="mb-2 font-inter text-xl font-semibold text-foreground">Welcome to the Dashboard</h2>
		<p class="text-center font-inter text-base font-normal text-muted-foreground">
			Here is a brief description about the dashboard
		</p>
	</div>
</div>
<div></div>
