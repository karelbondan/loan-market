/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2",
        "primary-blue": "#17A9E2",
        "secondary-blue": "#E2EFFF",
        "sidebar-text": "#646567",
        "header-text": "#4f5051",
        "batang-notification": "#d1d1d2",
      },
    },
  },
  plugins: [],
};
