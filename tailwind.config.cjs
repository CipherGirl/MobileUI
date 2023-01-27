/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#7b61ff',
        seconday: '#ca33ff',
      },
    },
  },
  plugins: [],
};
