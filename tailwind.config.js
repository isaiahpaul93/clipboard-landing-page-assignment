/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'strong-cyan':'hsl(171, 66%, 44%)',
        'light-blue': 'hsl(233, 100%, 69%)',
        'dark-grayish-blue': 'hsl(210, 10%, 33%)',
        'grayish-blue': 'hsl(201, 11%, 66%)'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-header-mobile.png')",
        'hero-desktop': "url('/images/bg-header-desktop.png')"
      }
     
    },
  },
  plugins: [],
}
