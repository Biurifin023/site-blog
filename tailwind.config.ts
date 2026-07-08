import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        white: "#FFFFFF",
        blue: {
          100: "#7ea4d7",
          200: "#2c85fc",
          300: "#2c85fc",
          400: "#0D284C",
        },
        cyan: {
          100: "#2debfc",
          200: "#187d86",
          300: "#0e474c"
        },
        gray: {
          100: "#f9fafc",
          200: "#d3d5d9",
          300: "#93979f",
          400: "#2d242c",
          500: "#16181d",
          600: "#14161a",
          700: "#101216",
          800: "#0b0c0f",
        },
      },
      borderRadius: {
        lg: '.5rem',
        md: 'calc(.5rem - 2px)',
        sm: 'calc(.5rem - 4px'
      },
      fontFamily: {
        sans: ['PT Sans Caption', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-hg': ['40px', { lineHeight: '120%', fontWeight: 700 }],
        'heading-xl': ['32px', { lineHeight: '120%', fontWeight: 700 }],
        'heading-lg': ['28px', { lineHeight: '120%', fontWeight: 700 }],
        'heading-md': ['24px', { lineHeight: '120%', fontWeight: 700 }],
        'heading-sm': ['20px', { lineHeight: '120%', fontWeight: 700 }],
        'heading-xs': ['16px', { lineHeight: '120%', fontWeight: 700 }],

        'body-md': ['16px', { lineHeight: '150%', fontWeight: 400 }],
        'body-sm': ['14px', { lineHeight: '150%', fontWeight: 400 }],
        'body-xs': ['12px', { lineHeight: '150%', fontWeight: 400 }],

        'body-tag': ['12px', { lineHeight: '100%', fontWeight: 400 }],


        'action-md': ['16px', { lineHeight: 'normal', fontWeight: 500 }],
        'action-sm': ['14px', { lineHeight: 'normal', fontWeight: 500 }],
      },
    }
  },

  plugins: [tailwindcssAnimate],
} satisfies Config;
