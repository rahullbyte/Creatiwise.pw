/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        miedinger: ['Miedinger Bold', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Syne: ['Syne', 'sans-serif']
      },
      colors: {
        dark: "#010208", 
        gray: "#CBCBCB"
      },
    },
  },
  plugins: [],
};