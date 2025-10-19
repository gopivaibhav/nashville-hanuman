/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          maroon: "#7b1113",
          gold: "#d4af37",
          cream: "#fff6e5",
        },
      },
    },
  },
  plugins: [],
};
