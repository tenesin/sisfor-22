/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        'light-grey-sisfor': '#262626',
        'semi-black-sisfor': '#0F0F0F',
        'dark-grey-sisfor': '#C2163F',
        'danger-medium-sisfor': '#F31B4F',
        'danger-subtle-sisfor': '#C2163F',
        'blue-sisfor': '#0171B9',
        'light-blue-sisfor': '#34B5E8',
        'dark-grey-sisfor': '#161616',
      },
    },
  },
  plugins: [],
};
