import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        nightclub: {
          blue: "#2563eb",
          purple: "#3a88edff",
          dark: "#1e1b4b",
          gold: "#f59e0b",
          lightblue: "#3b82f6",
          gradient1: "#1e40af",
          gradient2: "#7c2d12",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-purple": "pulse-purple 2s infinite",
        "neon": "neon-text 1.5s ease-in-out infinite alternate",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "slide-up": "slideInUp 0.6s ease-out",
      },
      backgroundImage: {
        "gradient-nightclub": "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1356a3ff 100%)",
        "gradient-purple": "linear-gradient(135deg, #667eea 0%, #1d76aaff 100%)",
        "gradient-gold": "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
