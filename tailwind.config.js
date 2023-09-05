/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        dropdown: 'dropdown .1s ease',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        DEFAULT: '#1B1D1F',
        primary: {
          300: '#08995C',
          200: '#0ABE7D',
          100: '#CFF4D2',
          50: '#F5FFF6',
        },
        yellow: '#FFD232',
        purple: '#B85FFF',
        red: '#FF3257',
        grey: {
          800: '#1B1D1F',
          700: '#26282B',
          600: '#474C51',
          500: '#74787D',
          400: '#A0A4A8',
          300: '#CBCDD2',
          200: '#E9EBED',
          100: '#F7F8F9',
        },
        white: '#FFFFFF',
      },
      borderColor: {
        DEFAULT: '#E9EBED',
      },
      boxShadow: {
        chatCard: '0px 0px 20px 0px #00000014',
        dropdown: '0px 0px 14px 0px #07D5801A',
      },
      screens: {
        tablet: '1000px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
