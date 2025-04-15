/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#2A5A45',
          'secondary': '#F3F5F6',
          'tertiary': '#737380',
          'highlight': '#FFA585',
          'text-dark': '#41414D',
          'text-light': '#617480',
        },
        fontFamily: {
          sans: ['Saira', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }