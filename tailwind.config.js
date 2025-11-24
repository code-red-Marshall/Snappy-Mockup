/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vantage-purple': '#7C3AED',
        'vantage-purple-secondary': '#A78BFA',
        'vantage-text-primary': '#1F1F1F',
        'vantage-text-secondary': '#6A6A6A',
        'vantage-border': '#E5E7EB',
        'vantage-bg-light': '#F6F7FB',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'vantage-soft': '0px 2px 6px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
