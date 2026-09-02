import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bmw: {
          black: "#0a0a0a",
          dark: "#111113",
          graphite: "#1c1c1f",
          gray: "#2a2a2e",
          lightgray: "#3f3f46",
          white: "#f5f5f5",
          red: "#e02424",
          darkred: "#b91c1c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(224, 36, 36, 0.3)',
        'card': '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        progress: 'progress 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
