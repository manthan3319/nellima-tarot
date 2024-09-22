/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-serif': ['"DM Serif Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-red': '#9B1815',
        'custom-pink': '#D1B1C8',
        'custom-dark-red': '#D62A26',
        'custome-white':"#faf4f0"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
