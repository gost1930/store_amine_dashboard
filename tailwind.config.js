/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fe2c57", // Red from the bot's speech bubbles
        secondery: "#e47100", // Orange from the bot's speech bubbles
        /* Extra Coolrs */
        white: "#FFFFFF", // Background color
        black: "#000000", // Text color
        // green: "#00FF00", // Dot indicating online status
        // gray: "#f3f4f6",
      },
      fontFamily: {
        jaldi: ["Jaldi", "sans-serif"],
      },
    },
  },
  plugins: [],
}