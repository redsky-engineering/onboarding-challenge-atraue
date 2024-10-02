<script lang="ts">
	import avatarIcon from '$lib/assets/images/avatar.svg';
	import menuIcon from '$lib/assets/images/li-menu.svg';
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="flex bg-muted-opacity border-b-1 border-border">
	<div class="w-[50vw] p-4 desktop:w-full desktop:px-4 desktop:py-2.5">
		<h1 class="font-inter text-xl font-semibold text-foreground desktop:text-3xl">Dashboard</h1>
	</div>
	<div class="border-l-1"></div>
	<div class="flex w-[50vw] items-center justify-end gap-x-2 text-nowrap px-4 py-3 desktop:w-auto">
		<Avatar.Root>
			<Avatar.Image src={avatarIcon} alt="@jd" />
			<Avatar.Fallback>JD</Avatar.Fallback>
		</Avatar.Root>
		<div class="font-inter text-base font-medium text-foreground">John Doe</div>
		<Button class="desktop:hidden" variant="outline" size="sm"
			><img class="h-4 w-4" src={menuIcon} alt="Menu icon" /></Button
		>
	</div>
</div>
