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
        "brand-gray-light": "#F3F3F3",
        "brand-blue-dark": "#252E42",
        "brand-gray": "#F7F7F7",
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'md-custom2': '650px', // Custom breakpoint
      'md-custom': '950px', // Custom breakpoint
      'md-custom3': '680px', // Custom breakpoint
      'max-md-custom3': {'max':'679px'}, // Custom breakpoint
      'max-sm-custom': {'max':'450px'}, // Custom breakpoint
      'max-sm-custom2': {'max':'495px'}, // Custom breakpoint
    },
  },
  plugins: [require("flowbite/plugin")],
};

