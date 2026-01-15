/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'vintage-navy': '#1d2f58',
        'vintage-gold': '#e2c277',
        'vintage-cobre': '#c3a665',
      },
      fontFamily: {
        'black': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0px #e2c277',
        'brutal-sm': '4px 4px 0px #e2c277',
      }
    },
  },
  plugins: [],
};
