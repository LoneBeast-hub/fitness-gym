/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js,jsx}"
  ],
    theme: {
    extend: {
      backgroundColor: {
        'text-heading': '#ff6600',
        'backgroud-color': '#181717',
        'light-gray': '#777777'
      },
      maxWidth: {
        486: '486px'
      }
    },
  },
  plugins: [],
}

