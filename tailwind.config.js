/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'carbon-light': '#252C3E99',
        'orange-foot': '#EF5106'
      },
    },
  },
  plugins: [],
}

