/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2560px',
        '3xl': '1920px',
        'mobile':'315px'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

