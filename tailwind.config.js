/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom orange palette with better contrast ratios
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ea580c', // Main brand color - darkened for better contrast
          600: '#c2410c', // Hover state
          700: '#9a3412', // Even darker for maximum contrast
        },
      },
    },
  },
  plugins: [],
};