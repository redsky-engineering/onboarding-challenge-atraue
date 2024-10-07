<script>
	import '../../app.css';
	import SideNavBar from './SideNavBar.svelte';
	import TopNavBar from './TopNavBar.svelte';
</script>

<div class="min-w-screen flex min-h-screen">
	<SideNavBar />
	<div class="flex w-full flex-col">
		<TopNavBar />
		<slot />
	</div>
</div>
