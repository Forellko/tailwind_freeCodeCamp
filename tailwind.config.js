/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      margin: {
        1: '100px',
        2: '200px',
      },
      colors: {
        test: {
          lol: '#3dc21f',
        },
      },
    },
  },
  plugins: [],
};
