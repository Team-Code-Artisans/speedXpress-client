/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {

        'states-banner': "url('/src/Assets/Photos/erika-fletcher-GJwgw_XqooQ-unsplash.jpg')",
      },
      colors: {
        'yellow': '#FFE715',
        'dark-green': '#101920',


      }
    },
  },
  plugins: [],
};
