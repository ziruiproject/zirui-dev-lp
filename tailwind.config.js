/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Cormorant Garamond']
    },
    colors: {
      'green': '#08FFC8',
      'white': '#FFF7F7'
    },
    borderWidth: {
      '1': '1px'
    },
    extend: {},
  },
  plugins: [],
}