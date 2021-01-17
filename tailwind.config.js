module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class' or false
  theme: {
    fontFamily: {
      serif: ["PT Serif"],
    },
    extend: {
      colors: {
        primary: {
          base: "#0A192F",
        },
        secondary: {
          base: "#F6BE3B",
        },
        tertiary: {
          base: "#8892B0",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
