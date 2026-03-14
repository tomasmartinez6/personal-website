/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#d8e8c4',
        ink: '#1e3120',
        muted: '#4a6b4c',
        accent: '#7a5c10',
        forest: '#2d6a4f',
        offwhite: '#f0ece3',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
