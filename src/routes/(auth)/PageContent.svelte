<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div class={cn("flex flex-grow flex-col desktop:flex-row items-center gap-4 justify-center p-4 bg-muted-opacity", className)}>
    <slot/>
</div>