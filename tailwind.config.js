/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
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
  plugins: [],
};
