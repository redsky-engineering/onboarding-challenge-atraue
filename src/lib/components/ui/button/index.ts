import { type VariantProps, tv } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';

//ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
const buttonVariants = tv({
	base: 'font-inter text-base font-semibold disabled:opacity-50 focus:shadow-button',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground  hover:opacity-90',
			// destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline: 'border-1 bg-background hover:bg-muted active:bg-muted'
			//outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border'
			// secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			// ghost: 'hover:bg-accent hover:text-accent-foreground',
			// link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'px-4 py-1.5 rounded-lg',
			// default: 'h-10 px-4 py-2 rounded-lg',
			sm: 'p-2.5 rounded-lg'
			// lg: 'h-11 rounded-lg px-8',
			// icon: 'h-10 w-10'
		}
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
