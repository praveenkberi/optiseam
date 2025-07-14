/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A89A7',
        secondary: '#4D908E',
        tertiary: '#627E79',
        dark: '#44576D',
        accent: '#584E60',
      },
    },
  },
  plugins: [],
};