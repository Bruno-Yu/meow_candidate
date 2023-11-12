/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      color: {
        primary: '#4527A0',
        secondary: '#26A69A',
        background: '#E3E3E3',
        dark: '#222222'
      },
      fontFamily: {
        'Burnfont': ['Burnfont', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

