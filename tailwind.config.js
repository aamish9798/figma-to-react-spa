/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D5A80",
        secondary: "#EE6C4D",
        dark: "#293241",
        light: "#2F3746",
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [],
};
