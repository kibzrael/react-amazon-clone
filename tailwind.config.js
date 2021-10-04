module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#ff9900',
        secondary: '#146eb4',
        surface: '#f2f2f2',
        header: '#232f3e',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
