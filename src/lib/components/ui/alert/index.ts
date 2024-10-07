import { type VariantProps, tv } from 'tailwind-variants';

import Root from './alert.svelte';
import Description from './alert-description.svelte';
import Title from './alert-title.svelte';

export const alertVariants = tv({
	base: 'relative w-full rounded-lg border px-4 py-3 flex items-center gap-x-[0.875rem]',

	variants: {
		variant: {
			default: 'bg-background text-foreground',
			error: 'text-error-foreground bg-error-background'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export type Variant = VariantProps<typeof alertVariants>['variant'];
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export {
	Root,
	Description,
	Title,
	//
	Root as Alert,
	Description as AlertDescription,
	Title as AlertTitle
};
