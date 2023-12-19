/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< HEAD
    content: ["./src/**/*.{jsx,js}"],
    theme: {
        extend: {
            colors: {
                green_custom: "#08FFC8",
                white_custom: "#F6F6F6",
                black_custom: "#181818",
            },
        },
    },
    plugins: [],
};
=======
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
      'white': '#F6F6F6',
      'black': '#181818'
    },
    borderWidth: {
      '1': '1px'
    },
    borderRadius: {
      '5': '5px',
      '15': '15px'
    },
    extend: {},
  },
  plugins: [],
}
>>>>>>> 68f68031c1530ebf4cc52d2903ba6c518d7a047e
