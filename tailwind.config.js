const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: "'Poppins', 'sans-serif'",
      manrope: "'Manrope', 'sans-serif'",
      robotoSlab: "'Roboto Slab', 'serif'",
      rubik: "'Rubik', sans-serif",
    },
    extend: {
      colors: {
        //add your own color
        //https://tailwindcss.com/docs/customizing-colors
        navy: "#161D6F",
        lightNavy: "#76799C",
        darkGray: "#939393",
      },
      boxShadow: {
        cardShadow: "0px 26.7083px 66.7708px rgba(18, 17, 39, 0.08)",
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
