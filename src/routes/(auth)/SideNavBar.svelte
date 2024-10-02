<script lang="ts">
	import logo from '$lib/assets/images/logo.svg';
	import { PAGE_LINKS } from '../constants';
	import NavList from './NavList.svelte';
</script>

<nav class="hidden desktop:flex w-[19rem] flex-shrink-0 flex-col items-start px-2 py-3 bg-background border-r-1">
	<img class="h-[2.563rem] mb-4" src={logo} alt="Logo" />
    <NavList links={PAGE_LINKS} />
</nav>
