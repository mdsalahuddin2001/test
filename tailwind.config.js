const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: "'Poppins', 'sans-serif'",
      manrope: "'Manrope', 'sans-serif'",
      robotoSlab: "'Roboto Slab', 'serif'",
    },
    extend: {
      colors: {
        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
