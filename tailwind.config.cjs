/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
