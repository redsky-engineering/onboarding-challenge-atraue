<script lang="ts">
	import PageContent from '../PageContent.svelte';
	import icon from '$lib/assets/images/li-layout-dashboard.svg';
</script>

<PageContent>
	<img class="mb-4 h-24 w-24" src={icon} alt="Dashboard icon" />
	<h2 class="mb-2 font-inter text-xl font-semibold text-foreground">Welcome to the Dashboard</h2>
	<p class="text-center font-inter text-base font-normal text-muted-foreground">
		Here is a brief description about the dashboard
	</p>
</PageContent>
