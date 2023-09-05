/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      screens: {
        tablet: '1000px',
      },
      fontSize: {
        h1PC: ['32px', { lineHeight: '40px', fontWeight: 'bold' }],
        h1TAB: ['30px', { lineHeight: '38px', fontWeight: 'bold' }],
        h1MOB: ['25px', { lineHeight: '33px', fontWeight: 'bold' }],

        h2PC: ['26px', { lineHeight: '34px', fontWeight: 'bold' }],
        h2TAB: ['24px', { lineHeight: '32px', fontWeight: 'bold' }],
        h2MOB: ['21px', { lineHeight: '29px', fontWeight: 'bold' }],

        h3PC: ['22px', { lineHeight: '30px', fontWeight: 'bold' }],
        h3TAB: ['20px', { lineHeight: '28px', fontWeight: 'bold' }],
        h3MOB: ['17px', { lineHeight: '25px', fontWeight: 'bold' }],

        h4PC: ['18px', { lineHeight: '26px', fontWeight: 'bold' }],
        h4TAB: ['16px', { lineHeight: '32px', fontWeight: 'bold' }],
        h4MOB: ['14px', { lineHeight: '22px', fontWeight: 'bold' }],

        b1PC: ['18px', { lineHeight: '26px', fontWeight: 'normal' }],
        b1TAB: ['16px', { lineHeight: '32px', fontWeight: 'normal' }],
        b1MOB: ['14px', { lineHeight: '22px', fontWeight: 'normal' }],

        b2PC: ['16px', { lineHeight: '24px', fontWeight: 'bold' }],
        b2TAB: ['15px', { lineHeight: '23px', fontWeight: 'bold' }],
        b2MOB: ['13px', { lineHeight: '21px', fontWeight: 'bold' }],

        b3PC: ['16px', { lineHeight: '24px', fontWeight: 'medium' }],
        b3TAB: ['15px', { lineHeight: '23px', fontWeight: 'medium' }],
        b3MOB: ['13px', { lineHeight: '21px', fontWeight: 'medium' }],

        b4PC: ['16px', { lineHeight: '24px', fontWeight: 'normal' }],
        b4TAB: ['15px', { lineHeight: '23px', fontWeight: 'normal' }],
        b4MOB: ['13px', { lineHeight: '21px', fontWeight: 'normal' }],

        cap1PC: ['14px', { lineHeight: '22px', fontWeight: 'bold' }],
        cap1TAB: ['13px', { lineHeight: '21px', fontWeight: 'bold' }],
        cap1MOB: ['11px', { lineHeight: '19px', fontWeight: 'bold' }],

        cap2PC: ['14px', { lineHeight: '22px', fontWeight: 'normal' }],
        cap2TAB: ['13px', { lineHeight: '21px', fontWeight: 'normal' }],
        cap2MOB: ['11px', { lineHeight: '19px', fontWeight: 'normal' }],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
