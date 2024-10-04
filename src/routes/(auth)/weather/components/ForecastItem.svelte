<script lang="ts">
	import { cn } from "$lib/utils";

    export let title: string;
    export let value: string | number | null;
    export let unit: string | undefined = undefined;

    function formatValue(value: string | number | null, unit: string | undefined): string {
        if (value === null) {
            return "-";
        }
        if (typeof value === "number") {
            return `${value} ${unit}`;
        }

        return value;
    }

    $: formattedValue = formatValue(value, unit);

    export let className: string | undefined = undefined;

    export { className as class};
</script>

<div class={cn("flex flex-col", className)}>
    <h4 class="text-sm font-inter font-normal text-muted-foreground mb-2">{title}</h4>
    <p class="text-base font-inter font-medium">{formattedValue}</p>
</div>