/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#444',
        beige: '#fff7ed',
      },
      fontFamily: {
        primary: ['GangWonEduPower'],
      },
    },
  },
  plugins: [],
};
