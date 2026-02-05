/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // Roxo Embelleze defined in PRD
      },
      fontFamily: {
        sans: ['Inter_400Regular'],
        bold: ['Inter_700Bold'],
      }
    },
  },
  plugins: [],
}
