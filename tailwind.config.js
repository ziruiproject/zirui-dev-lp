/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackCustom: "#131416",
        greenCustom: "#08FFC8",
        whiteCustom: "#FFF7F7",
      },
    },
  },
  plugins: [],
};
