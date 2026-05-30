/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1DB954',
          'green-light': '#1ed760',
        },
        surface: {
          base: '#121212',
          elevated: '#181818',
          highlight: '#282828',
          press: '#333333',
        },
        text: {
          base: '#FFFFFF',
          subdued: '#A7A7A7',
          bright: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Circular', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        sidebar: '240px',
        player: '90px',
      },
    },
  },
  plugins: [],
};
