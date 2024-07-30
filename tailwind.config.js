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
      },
      colors: {
        primary: {
          100: '#FF6600',
          light: '#FBEBE3'
        },
        dark: '#181717',
        gray: {
          f2: '#F2F2F2',
          fa: '#FAFAFA',
          c4: '#C4C4C4',
          e5: '#E5E5E5'
        },
        black: {
          100: '#646464',
          2: '#8B8B8B'
        },
        pending: '#FFC325',
        red: {
          100: '#CC4424'
        },
        green: {
          100: '#00923F',
          2: '#F6FAF9'
        },
        blue: {
          100: '#2196F3',
          2: '#F6FAF9'
        },
        purple: {
          100: '#8B5CF6',
          2: '#F6F6FC'
        }
      }
    },
  },
  plugins: [],
}

