/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: "#ff0000",
      lightgray: "#eeeeee",
      background: "#f7f7f7",
      gray: "#cccccc",
      drakgray: "#4d4d4d",
      "background-dark": "#0b0b0b",
      white: "#ffffff",
      black: "#000000",
    },
    screens: {
      desktop: { min: "1100px" },
      mobile: { max: "800px" },
    },
    extend: {},
  },
  plugins: [],
};
