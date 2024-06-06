/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'dark-100' : '#121212',
      'dark-200' : '#282828',
      'dark-300' : '#3f3f3f',
      'dark-400' : '#575757',
      'dark-500' : '#717171',
      'dark-600' : '#8b8b8b',
      'primary-100' : '#382bf0',
      'primary-200' : '#5e43f3',
      'primary-300' : '#7a5af5',
      'primary-400' : '#9171f8',
      'primary-500' : '#a688fa',
      'primary-600' : '#ba9ffb',
    },
    },
  },
  plugins: [],
}

