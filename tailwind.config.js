/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-blue": '#00448B',
        "app-red": '#DA1A33'
      }
    },
  },
  plugins: [],
}