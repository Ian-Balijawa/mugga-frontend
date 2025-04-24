// /** @type {import('tailwindcss').Config} */
// export default {
// 	darkMode: ["class"],
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px'
// 			}
// 		},
// 		extend: {
// 			colors: {
// 				border: 'hsl(var(--border))',
// 				input: 'hsl(var(--input))',
// 				ring: 'hsl(var(--ring))',
// 				background: 'hsl(var(--background))',
// 				foreground: 'hsl(var(--foreground))',
// 				primary: {
// 					DEFAULT: '#2E8B57', // Sea Green (primary green)
// 					50: '#E6F4F1',
// 					100: '#B3E0D3',
// 					200: '#80CCB5',
// 					300: '#4DB897',
// 					400: '#2E8B57',
// 					500: '#1E5E3B',
// 					600: '#14422A',
// 					700: '#0A2619',
// 					800: '#061A11',
// 					900: '#030D08',
// 					foreground: '#FFFFFF'
// 				},
// 				secondary: {
// 					DEFAULT: '#4682B4', // Steel Blue (sky blue)
// 					50: '#E6F1F8',
// 					100: '#B3D6EC',
// 					200: '#80BBE0',
// 					300: '#4D9FD4',
// 					400: '#4682B4',
// 					500: '#2F5E7D',
// 					600: '#1F3F53',
// 					700: '#10202A',
// 					800: '#081015',
// 					900: '#040809',
// 					foreground: '#FFFFFF'
// 				},
// 				accent: {
// 					DEFAULT: '#DAA520', // Goldenrod (gold)
// 					50: '#FBF3D5',
// 					100: '#F5E3A3',
// 					200: '#EFD371',
// 					300: '#E9C340',
// 					400: '#DAA520',
// 					500: '#B88A19',
// 					600: '#966F15',
// 					700: '#74550F',
// 					800: '#523A0A',
// 					900: '#301F05',
// 					foreground: '#FFFFFF'
// 				},
// 				destructive: {
// 					DEFAULT: '#FFD700', // Bright Yellow
// 					50: '#FFF9E6',
// 					100: '#FFEF99',
// 					200: '#FFE566',
// 					300: '#FFDB33',
// 					400: '#FFD700',
// 					500: '#CCB300',
// 					600: '#998500',
// 					700: '#665800',
// 					800: '#332C00',
// 					900: '#1A1600',
// 					foreground: '#000000'
// 				}
// 			},
// 			borderRadius: {
// 				lg: 'var(--radius)',
// 				md: 'calc(var(--radius) - 2px)',
// 				sm: 'calc(var(--radius) - 4px)'
// 			}
// 		}
// 	},
// 	plugins: [require( "tailwindcss-animate" )]
// }


import { fontFamily } from "tailwindcss/defaultTheme"

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
			fontFamily: {
				sans: [
					'Inter var',
					...fontFamily.sans
				]
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2F855A',
					50: '#F0FFF4',
					100: '#C6F6D5',
					200: '#9AE6B4',
					300: '#68D391',
					400: '#48BB78',
					500: '#38A169',
					600: '#2F855A',
					700: '#276749',
					800: '#22543D',
					900: '#1C4532',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-in': 'slideIn 0.5s ease-out',
				'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				scroll: 'scroll 20s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideIn: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				pulse: {
					'0%, 100%': {
						opacity: 0.5,
						transform: 'scale(1)',
					},
					'50%': {
						opacity: 0.8,
						transform: 'scale(1.1)',
					},
				},
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				}
			},
			backgroundImage: {
				'grid-white': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
			},
		}
	},
	plugins: [require( "tailwindcss-animate" )],
}
