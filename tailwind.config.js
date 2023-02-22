/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './pages/**/*.{js,ts,jsx,tsx,html}',
      './components/**/*.{js,ts,jsx,tsx,html}',
      './src/**/*.{html,js}',
      
      
  ],
  darkMode: 'class',
  theme: {
      extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};