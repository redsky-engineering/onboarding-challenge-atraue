import { type VariantProps, tv } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'font-inter text-base font-semibold disabled:opacity-50 focus:shadow-button',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground',
			outline: 'border-1 bg-background hover:bg-muted active:bg-muted'
		},
		size: {
			default: 'px-4 py-1.5 rounded-lg',
			sm: 'p-2.5 rounded-lg'
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
