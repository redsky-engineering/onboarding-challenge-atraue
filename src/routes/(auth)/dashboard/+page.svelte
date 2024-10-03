<script lang="ts">
	import DashboardContent from './DashboardContent.svelte';
	import SideNavBar from './SideNavBar.svelte';
	import TopNavBar from './TopNavBar.svelte';
</script>

<div class="min-w-screen flex min-h-screen">
	<SideNavBar />
	<div class="flex flex-col w-full">
		<TopNavBar />
		<DashboardContent />
	</div>
</div>
