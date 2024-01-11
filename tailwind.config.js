/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
