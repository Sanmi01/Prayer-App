/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6f8",
          100: "#cee3eb",
          200: "#add0dd",
          300: "#8cbed0",
          400: "#6babc3",
          500: "#4a98b5",
          600: "#3c7d94",
          700: "#2f6173",
          800: "#224552",
          900: "#142a31",
          950: "#070e10",
        },
        "brand-gray-light": "#F3F3F3"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

