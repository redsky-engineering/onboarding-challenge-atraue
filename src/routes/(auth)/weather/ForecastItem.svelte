<script lang="ts">
    export let title: string;
    export let value: string | number | undefined = undefined;
</script>

<div class="flex flex-col gap-y-2">
    <h4 class="text-sm font-inter font-normal text-muted-foreground">{title}</h4>
    <p class="text-base font-inter font-medium">{value ?? "-"}</p>
</div>