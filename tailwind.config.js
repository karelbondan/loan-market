/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#f2f2f2",
        "primary-blue": "#00AAE5",
        "sidebar-text": "#646567",
      }
    },
  },
  plugins: [],
};
