import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			cairo: [
  				'var(--font-cairo)',
  				'Tahoma',
  				'Arial',
  				'sans-serif'
  			],
  			inter: [
  				'var(--font-inter)',
  				'system-ui',
  				'sans-serif'
  			]
  		},

  		colors: {
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
  				'5': 'hsl(var(--chart-5))',
  			},

  			// ألوان مخصصة للنايت كلوب
  			nightclub: {
  				purple: {
  					DEFAULT: '#8a2be2',
  					50: '#f3e8ff',
  					100: '#e9d5ff',
  					200: '#d4b3ff',
  					300: '#bd88ff',
  					400: '#a855f7',
  					500: '#8a2be2',
  					600: '#7c3aed',
  					700: '#6d28d9',
  					800: '#5b21b6',
  					900: '#4c1d95',
  				},
  				gold: {
  					DEFAULT: '#ffd700',
  					50: '#fffef0',
  					100: '#fffacd',
  					200: '#fff700',
  					300: '#ffed4e',
  					400: '#ffe066',
  					500: '#ffd700',
  					600: '#f5c842',
  					700: '#d69e2e',
  					800: '#b7791f',
  					900: '#975a16',
  				},
  				blue: {
  					DEFAULT: '#667eea',
  					50: '#f0f9ff',
  					100: '#e0f2fe',
  					200: '#bae6fd',
  					300: '#7dd3fc',
  					400: '#38bdf8',
  					500: '#667eea',
  					600: '#0284c7',
  					700: '#0369a1',
  					800: '#075985',
  					900: '#0c4a6e',
  				},
  				dark: '#0a0a0a',
  				accent: '#ff6b35',
  				success: '#10b981',
  				warning: '#f59e0b',
  				error: '#ef4444',
  			}
  		},

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

  		// تحسينات للـ animations والحركات
  		animation: {
  			'float': 'float 3s ease-in-out infinite',
  			'glow': 'glow 2s ease-in-out infinite alternate',
  			'pulse-purple': 'pulse-purple 2s infinite',
  			'pulse-gold': 'pulse-gold 2s infinite',
  			'neon': 'neon-text 1.5s ease-in-out infinite alternate',
  			'sparkle': 'sparkle 2s ease-in-out infinite',
  			'slide-up': 'slideInUp 0.6s ease-out',
  			'slide-down': 'slideInDown 0.6s ease-out',
  			'fade-in': 'fadeIn 0.8s ease-out',
  			'scale-in': 'scaleIn 0.5s ease-out',
  			'bounce-gentle': 'bounceGentle 2s infinite',
  			'rotate-slow': 'rotateSlow 10s linear infinite',
  			'wobble': 'wobble 1s ease-in-out',
  		},

  		keyframes: {
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  			glow: {
  				'0%': { boxShadow: '0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700' },
  				'100%': { boxShadow: '0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700' },
  			},
  			'pulse-purple': {
  				'0%, 100%': { boxShadow: '0 0 0 0 rgba(138, 43, 226, 0.7)' },
  				'70%': { boxShadow: '0 0 0 10px rgba(138, 43, 226, 0)' },
  			},
  			'pulse-gold': {
  				'0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.7)' },
  				'70%': { boxShadow: '0 0 0 10px rgba(255, 215, 0, 0)' },
  			},
  			'neon-text': {
  				'0%': { textShadow: '0 0 5px #ffd700, 0 0 10px #ffd700' },
  				'100%': { textShadow: '0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700' },
  			},
  			sparkle: {
  				'0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
  				'50%': { opacity: '1', transform: 'scale(1.2)' },
  			},
  			slideInUp: {
  				'0%': { transform: 'translateY(100%)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  			slideInDown: {
  				'0%': { transform: 'translateY(-100%)', opacity: '0' },
  				'100%': { transform: 'translateY(0)', opacity: '1' },
  			},
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			scaleIn: {
  				'0%': { transform: 'scale(0.8)', opacity: '0' },
  				'100%': { transform: 'scale(1)', opacity: '1' },
  			},
  			bounceGentle: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-5px)' },
  			},
  			rotateSlow: {
  				'0%': { transform: 'rotate(0deg)' },
  				'100%': { transform: 'rotate(360deg)' },
  			},
  			wobble: {
  				'0%': { transform: 'translateX(0%)' },
  				'15%': { transform: 'translateX(-25%) rotate(-5deg)' },
  				'30%': { transform: 'translateX(20%) rotate(3deg)' },
  				'45%': { transform: 'translateX(-15%) rotate(-3deg)' },
  				'60%': { transform: 'translateX(10%) rotate(2deg)' },
  				'75%': { transform: 'translateX(-5%) rotate(-1deg)' },
  				'100%': { transform: 'translateX(0%)' },
  			},
  		},

  		// خلفيات متدرجة مخصصة
  		backgroundImage: {
  			'gradient-nightclub': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #8a2be2 100%)',
  			'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8a2be2 100%)',
  			'gradient-gold': 'linear-gradient(135deg, #ffd700 0%, #ffb347 50%, #ff6b35 100%)',
  			'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
  			'gradient-hero': 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(138,43,226,0.3) 50%, rgba(0,0,0,0.9) 100%)',
  		},

  		// تأثيرات الضبابية
  		backdropBlur: {
  			xs: '2px',
  			sm: '4px',
  			md: '8px',
  			lg: '12px',
  			xl: '16px',
  		},

  		// تحسينات للـ spacing
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'100': '25rem',
  			'112': '28rem',
  			'128': '32rem',
  		},

  		// تحسين أحجام الشاشات
  		screens: {
  			'xs': '475px',
  			'3xl': '1600px',
  			'4xl': '1920px',
  		},

  		// تحسينات typography
  		fontSize: {
  			'2xs': ['0.625rem', { lineHeight: '0.75rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '3.5rem' }],
  			'6xl': ['3.75rem', { lineHeight: '4rem' }],
  			'7xl': ['4.5rem', { lineHeight: '5rem' }],
  			'8xl': ['6rem', { lineHeight: '6.5rem' }],
  			'9xl': ['8rem', { lineHeight: '8.5rem' }],
  		},

  		// تحسين الظلال
  		boxShadow: {
  			'glow-purple': '0 0 20px rgba(138, 43, 226, 0.5)',
  			'glow-gold': '0 0 20px rgba(255, 215, 0, 0.5)',
  			'glow-blue': '0 0 20px rgba(102, 126, 234, 0.5)',
  			'inner-glow': 'inset 0 0 20px rgba(138, 43, 226, 0.3)',
  			'neon': '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4)',
  		},

  		// تحسين الـ z-index
  		zIndex: {
  			'100': '100',
  		}
  	}
  },
  plugins: [
  	require("tailwindcss-animate"),
  	// إضافة plugin للـ accessibility
  	function({ addUtilities }: any) {
  		addUtilities({
  			'.focus-visible-only': {
  				'&:focus': {
  					outline: 'none',
  				},
  				'&:focus-visible': {
  					outline: '2px solid #ffd700',
  					outlineOffset: '2px',
  				},
  			},
  			'.skip-link': {
  				position: 'absolute',
  				top: '-40px',
  				left: '6px',
  				background: '#ffd700',
  				color: '#000',
  				padding: '8px',
  				borderRadius: '4px',
  				fontSize: '14px',
  				fontWeight: '600',
  				textDecoration: 'none',
  				zIndex: '1000',
  				'&:focus': {
  					top: '6px',
  				},
  			},
  			'.sr-only': {
  				position: 'absolute',
  				width: '1px',
  				height: '1px',
  				padding: '0',
  				margin: '-1px',
  				overflow: 'hidden',
  				clip: 'rect(0, 0, 0, 0)',
  				whiteSpace: 'nowrap',
  				border: '0',
  				'&:focus': {
  					position: 'static',
  					width: 'auto',
  					height: 'auto',
  					padding: '0.5rem 1rem',
  					margin: '0',
  					overflow: 'visible',
  					clip: 'auto',
  					whiteSpace: 'normal',
  				},
  			},
  			'.glass-dark': {
  				background: 'rgba(0, 0, 0, 0.3)',
  				backdropFilter: 'blur(10px)',
  				border: '1px solid rgba(138, 43, 226, 0.2)',
  			},
  			'.glass-purple': {
  				background: 'rgba(138, 43, 226, 0.1)',
  				backdropFilter: 'blur(10px)',
  				border: '1px solid rgba(138, 43, 226, 0.3)',
  			},
  		});
  	},
  ],
} satisfies Config;
