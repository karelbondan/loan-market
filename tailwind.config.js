/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2",
        "primary-blue": "#17A9E2",
        "secondary-blue": "#E2EFFF",
        "tertiary-blue": "#005274",
        "sidebar-text": "#646567",
        "header-text": "#4f5051",
        "batang-notification": "#d1d1d2",
        "app-header-gray": "#c1c1c1",
      },
      screens: {
        "480p": "480px", // general things
        "525p": "525px", // to hide the client card titles
        "640p": "640px", // reconfigure profile info
        "720p": "720px",
        "865p": "865px", // to hide notification on dashboard
        "980p": "980px", // to hide sidebar and reconfigure layout on dashboard
        "1280p": "1280px",
        "1440p": "1440px",
      },
    },
  },
  plugins: [],
};
