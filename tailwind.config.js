/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,jsx,js,ts,tsx}","./node_modules/@shadcn/ui/dist/**/*.js"],
  theme: {
  	extend: {
  		screens: {
  			xs: '480px'
  		},
  		colors: {
  			'sai': '#002300',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'xs': '12px',
  			'sm': '14px',
  			'base': '16px',
  			'lg': '18px',
  			'xl': '20px',
  			'2xl': '24px',
  			'3xl': '30px',
  			'4xl': '36px',
  			'5xl': '48px',
  			'6xl': '60px',
  			'7xl': '72px',
  			'8xl': '96px',
  			'9xl': '128px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontFamily: {
  		beb: ["Bebas Neue", 'sans-serif'],
  		lond: ["Londrina Sketch","sans-serif"],
  		pw: ["Playwrite GB S","cursive"],
  		dos: ["Dosis","sans-serif"],
  		oxy: ["Oxygen","sans-serif"]
  	}
  },
  plugins: [require("tailwindcss-animate")],
}