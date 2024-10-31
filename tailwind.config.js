/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2F2FF',
        secondary: '#7F00FF',
        light_purple: '#CF9FFF',
        custom_grey: '#D9D9D9',
        grey: '#808080'
      }
    },
  },
  plugins: [],
}

