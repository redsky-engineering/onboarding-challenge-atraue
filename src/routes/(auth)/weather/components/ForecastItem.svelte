<script lang="ts">
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
</script>

<div class="flex flex-col gap-y-2">
    <h4 class="text-sm font-inter font-normal text-muted-foreground">{title}</h4>
    <p class="text-base font-inter font-medium">{formattedValue}</p>
</div>