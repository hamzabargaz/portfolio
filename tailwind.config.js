/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          100: "#EDEDED",
          200: "#FBFBFB",
          300: "#0D0D0D",
          400: "#D7D7D7",
          ////////////
          // 100: "#E0E0E0",
          // 200: "#E8E8E8",
          // 300: "#111111",
          // 400: "#D7D7D7",
        },
        dark: {
          // 100: "#0D0D0D",
          // 200: "#1A1A1A",
          // 300: "#EEEEEE",
          // 400: "#A8A8A8",
          ////////////////
          100: "#1f1f1f",
          200: "#171717",
          300: "#EEEEEE",
          400: "#282828",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
