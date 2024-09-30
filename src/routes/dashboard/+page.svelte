<script lang="ts">
	import icon from '$lib/assets/images/li-layout-dashboard.svg';
    import menuIcon from '$lib/assets/images/li-menu.svg';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="min-w-screen min-h-screen">
	<div class="min-w-screen bg-muted-opacity flex min-h-screen flex-col">
		<div class="border-b-1 flex border-border">
			<div class="w-[50vw] p-4">
				<h1 class="font-inter text-xl font-semibold text-foreground">Dashboard</h1>
			</div>
            <div class="border-l-1"></div>
			<div class="flex justify-end items-center gap-x-2 w-[50vw] p-4">
                <div></div>
                <div class="text-base font-medium font-inter text-foreground">John Doe</div>
                <Button variant="outline" size="sm"><img src={menuIcon}/></Button>
            </div>
		</div>
		<div class="flex flex-grow flex-col items-center justify-center p-4">
			<img class="mb-4 h-24 w-24" src={icon} alt="Dashboard icon" />
			<h2 class="mb-2 font-inter text-xl font-semibold text-foreground">
				Welcome to the Dashboard
			</h2>
			<p class="font-inter text-base font-normal text-muted-foreground">
				Here is a brief description about the dashboard
			</p>
		</div>
	</div>
	<div></div>
</div>
