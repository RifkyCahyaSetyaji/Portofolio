/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1f6778',
          secondary: '#3a8c9a',
          accent: '#57d4dd',
          highlight: '#f2b705',
          bgLight: '#ffefd3',
          dark: '#393d3f',
          bgDark: '#121415',
          cardDark: '#1a1e20',
          textDark: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'glass-light': 'linear-gradient(135deg, rgba(255, 239, 211, 0.7), rgba(255, 255, 255, 0.4))',
        'glass-dark': 'linear-gradient(135deg, rgba(57, 61, 63, 0.7), rgba(18, 20, 21, 0.4))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 103, 120, 0.15)',
        'glass-hover': '0 8px 32px 0 rgba(31, 103, 120, 0.3)',
      }
    },
  },
  plugins: [],
}
