/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        dark: '#334155',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
