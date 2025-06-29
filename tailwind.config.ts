import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Kishore's Signature Color Palette
        "crimson-red": "#C41E3A",
        "burnt-orange": "#FF8C00",
        "electric-purple": "#B83DBA",
        "forest-green": "#228B22",
        "golden-yellow": "#DAA520",

        // Supporting Neutrals
        "charcoal-black": "#1C1C1C",
        "paper-white": "#F8F6F0",
        "dust-grey": "#8B8680",
        "concrete-grey": "#A8A8A8",

        // shadcn/ui compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        "roboto-condensed": ["var(--font-roboto-condensed)", "sans-serif"],
        "roboto-mono": ["var(--font-roboto-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "8xl": "6rem",
        "9xl": "8rem",
      },
      aspectRatio: {
        a4: "210 / 297",
        poster: "3 / 4",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "color-shift": "color-shift 4s ease-in-out infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "color-shift": {
          "0%": { color: "#C41E3A" },
          "25%": { color: "#FF8C00" },
          "50%": { color: "#B83DBA" },
          "75%": { color: "#228B22" },
          "100%": { color: "#C41E3A" },
        },
      },
      backgroundImage: {
        "noise-texture": "radial-gradient(circle at 1px 1px, rgba(28, 28, 28, 0.15) 1px, transparent 0)",
        "paper-texture": "radial-gradient(circle at 2px 2px, rgba(139, 134, 128, 0.1) 1px, transparent 0)",
        "bold-gradient": "linear-gradient(135deg, #C41E3A, #FF8C00, #B83DBA)",
      },
      backgroundSize: {
        noise: "20px 20px",
        paper: "15px 15px",
      },
      boxShadow: {
        poster: "0 20px 40px rgba(196, 30, 58, 0.2)",
        glow: "0 0 20px rgba(196, 30, 58, 0.3)",
      },
      letterSpacing: {
        poster: "0.2em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
