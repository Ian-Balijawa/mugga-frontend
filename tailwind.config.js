/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2E8B57', // Sea Green (primary green)
					50: '#E6F4F1',
					100: '#B3E0D3',
					200: '#80CCB5',
					300: '#4DB897',
					400: '#2E8B57',
					500: '#1E5E3B',
					600: '#14422A',
					700: '#0A2619',
					800: '#061A11',
					900: '#030D08',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#4682B4', // Steel Blue (sky blue)
					50: '#E6F1F8',
					100: '#B3D6EC',
					200: '#80BBE0',
					300: '#4D9FD4',
					400: '#4682B4',
					500: '#2F5E7D',
					600: '#1F3F53',
					700: '#10202A',
					800: '#081015',
					900: '#040809',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#DAA520', // Goldenrod (gold)
					50: '#FBF3D5',
					100: '#F5E3A3',
					200: '#EFD371',
					300: '#E9C340',
					400: '#DAA520',
					500: '#B88A19',
					600: '#966F15',
					700: '#74550F',
					800: '#523A0A',
					900: '#301F05',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#FFD700', // Bright Yellow
					50: '#FFF9E6',
					100: '#FFEF99',
					200: '#FFE566',
					300: '#FFDB33',
					400: '#FFD700',
					500: '#CCB300',
					600: '#998500',
					700: '#665800',
					800: '#332C00',
					900: '#1A1600',
					foreground: '#000000'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require( "tailwindcss-animate" )]
}
