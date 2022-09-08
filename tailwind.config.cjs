/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         montserrat:['"montserrat"','sans-serif'],
      },
      gridTemplateRows: {
        '11': 'repeat(11, minmax(0, 1fr))',
      },
      width: {
        '128': '32rem',
        '130':'40rem'
      }
    },
  },
  plugins: [],
}