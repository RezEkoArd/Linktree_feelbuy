/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custoum: "3px 3px 5px 2px rgba(110,94,96,0.75)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}