/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#004C3F"
      },
      black: {
        100: "#212625"
      }
    },
    extend: {},
  },
  plugins: [],
}
