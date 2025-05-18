/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E1A',
        cream: '#F5F5DC',
        matcha: '#7BAE4B',
        brown: '#B48A5A',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        logo: ['Montserrat', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      animation: {
        spinSlow: 'spin 100s linear infinite', // custom slow spin
      },
    },
  },
  plugins: [],
}

