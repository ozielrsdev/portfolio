/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A3A5A',
        secondary: '#3C6E91',
        light: '#A8D0E6',
        'gray-dark': '#1F2933',
        gray: '#3E4C59',
        'gray-light': '#CBD2D9',
        white: '#F9FAFB',
      },
      animation: {
        float: 'float 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
