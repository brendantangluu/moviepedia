/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        screens: {
          '3xl': '1600px',
          '4xl': '1920px'
        },
      },
    colors: {
      background: '#121212',
      text: '#efefef',
      logo: '#3554e9',
      headerBG: '#2a2a2a',
    },
  },
  plugins: [],
});

