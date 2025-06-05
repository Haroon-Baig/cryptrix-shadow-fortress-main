
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        cyber: {
          dark: "#1A1F2C",
          darker: "#151A24",
          blue: "#222840",
          accent: "#33C3F0",
          highlight: "#0FA0CE",
          warning: "#D64545",
          gray: "#403E43",
          "gray-light": "#8E9196",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        "ping-slow": {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0"
          }
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0.6"
          }
        },
        "rotate-slow": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        "typewriter": {
          to: {
            left: "100%"
          }
        },
        "blink": {
          "0%, 100%": {
            opacity: "1"
          },
          "50%": {
            opacity: "0"
          }
        },
        "float": {
          "0%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-10px)"
          },
          "100%": {
            transform: "translateY(0px)"
          }
        },
        "counter": {
          "0%": {
            "content-visibility": "hidden",
            opacity: "0"
          },
          "100%": {
            "content-visibility": "visible",
            opacity: "1"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "rotate-slow": "rotate-slow 15s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "typewriter": "typewriter 4s steps(40) 1s forwards",
        "blink": "blink 1s step-end infinite",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(rgba(51, 195, 240, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 195, 240, 0.05) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "cyber-grid": "50px 50px",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
