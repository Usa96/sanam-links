/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        onyx: '#21201F',
        charcoal: '#564D48',
        stone: '#807068',
        sand: '#BDABA2',
        ivory: '#F6F1F0',
        line: '#E6DCD7',
        ribbon: '#D9849A',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
