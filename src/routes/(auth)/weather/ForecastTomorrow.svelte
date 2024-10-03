<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import ForecastItem from './ForecastItem.svelte';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={className}>
	<h3 class="text-lg font-inter font-medium text-card-foreground mb-4">Tomorrow's Forecast</h3>
	<div class="grid grid-cols-[10rem_10rem_10rem]">
		<ForecastItem title="Current Temperature" value="30" />
		<div></div>
		<div></div>
		<ForecastItem title="Sunrise" value="30" />
		<ForecastItem title="Sunset" value="20" />
		<div></div>
		<ForecastItem title="Pressure" value="30" />
		<ForecastItem title="Humidity" value="20" />
		<ForecastItem title="Wind" value={undefined} />
	</div>
</div>
