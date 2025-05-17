/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondery: "#27272a",
        /* Extra Coolrs */
        red1: "#ef4444",
        red2: "#fee2e2",
        blue1: "#3b82f6",
        blue2: "#bfdbfe",
        yellow1: "#f59e0b",
        yellow2: "#fef3c7",
        green1: "#d1fae5",
        green2: "#10b981",
        purple1: "#a855f7",
        purple2: "#e9d5ff",
        black: "#000000",
      },
    },
  },
  plugins: [],
}