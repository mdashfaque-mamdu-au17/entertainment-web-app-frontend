/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#fc4747',
        'primary-black': '#10141e',
        'greyish-blue': '#5a698f',
        'semi-dark-blue': '#161d2f',
        'primary-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
