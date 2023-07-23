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
        primary: {
          DEFAULT: "#0A192F",
          50: "#38445D",
        },
        secondary: "#D8A31A",
        tertiary: "#E3F0FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
