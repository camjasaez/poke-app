const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        buttonShadow: `inset 0px -4px 0px rgba(0, 0, 0, 0.3)`,
      },
      colors: {
        Primary: '#f2b807',
        Second: '#F28F16',
        Third: '#F5DB13',
        Danger: '#D93E30',
        White: '#F6F7F9',
        Dark: '#212121',
      },
    },
  },
  plugins: [],
};
