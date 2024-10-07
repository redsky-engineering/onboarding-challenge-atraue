<script lang="ts">
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import menuIcon from '$lib/assets/images/li-menu.svg';
	import { Button } from '$lib/components/ui/button';
	import SideNavBar from './SideNavBar.svelte';
</script>

<Sheet>
	<SheetTrigger class="desktop:hidden">
		<Button variant="outline" size="sm"
			><img class="h-4 w-4" src={menuIcon} alt="Menu icon" /></Button
		></SheetTrigger
	>
	<SheetContent class="w-[19rem]" side="left">
        <SideNavBar/>
    </SheetContent>
</Sheet>
