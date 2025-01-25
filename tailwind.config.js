/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe2c57",
        secondery: "#27272a",
        /* Extra Coolrs */
        white: "#FFFFFF",
        black: "#000000",
      }
    },
  },
  plugins: [],
}