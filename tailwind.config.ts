import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			boxShadow: {
				button: '0px 0px 0px 1px var(--ring)',
				input: '0px 0px 0px 1px var(--ring)'
			},
			colors: {
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				}
			},
			// borderRadius: {
			// 	lg: 'var(--radius)',
			// 	md: 'calc(var(--radius) - 2px)',
			// 	sm: 'calc(var(--radius) - 4px)'
			// },
			fontFamily: {
				sans: [...fontFamily.sans],
				inter: ['Inter', 'sans-serif']
			},
			screens: {
				desktop: '90rem'
			},
			width: {
				mobile: '23.438rem',
				desktop: '45rem'
			},
			maxWidth: {
				mobile: '23.438rem',
				desktop: '45rem'
			}
		}
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('aria-invalid', '&[aria-invalid="true"]');
		}
	]
};

export default config;
