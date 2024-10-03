<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'flex flex-grow flex-col items-center justify-center gap-4 bg-muted-opacity p-4 desktop:flex-row',
		className
	)}
>
	<slot />
</div>
