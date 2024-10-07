<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLParagraphElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<p class={cn("font-inter font-normal text-sm text-muted-foreground max-w-[32rem]", className)} {...$$restProps}>
	<slot />
</p>
