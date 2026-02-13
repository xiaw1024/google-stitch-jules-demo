/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#19e65e",
        "background-light": "#f6f8f6",
        "background-dark": "#112116",
        "forgot-red": "#ef4444",
        "uncertain-yellow": "#f59e0b",
        "learning": "#fbbf24",
        "inactive": "#e2e8f0",
      },
      fontFamily: {
        "display": ["Lexend", "PingFang SC", "Microsoft YaHei", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}