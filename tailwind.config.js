/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // root HTML files
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      spacing: {
        "big": "48"
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
