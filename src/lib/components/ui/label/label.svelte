<script lang="ts">
	import { Label as LabelPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	type $$Props = LabelPrimitive.Props;
	type $$Events = LabelPrimitive.Events;

	let className: $$Props["class"] = undefined;
	export { className as class };
	//"text-base font-medium text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
</script>

<LabelPrimitive.Root
	class={cn(
		"text-base font-medium text-foreground peer-disabled:cursor-not-allowed",
		className
	)}
	{...$$restProps}
	on:mousedown
>
	<slot />
</LabelPrimitive.Root>
