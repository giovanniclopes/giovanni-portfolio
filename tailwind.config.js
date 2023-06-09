/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.tsx"];
export const theme = {
  extend: {
    screens: {
      mbl: { max: "630px" }, // mbl == mobile
      // => @media (max-width: 630px) { ... }
    },
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    backgroundImage: {
      main: "url(/src/assets/background.png)",
    },
    colors: {
      gray: {
        400: "#202020",
        500: "#0e0e0e",
        600: "#131313",
      },
      red: {
        500: "#cd5c5c",
      },
    },
  },
};
export const plugins = [];
