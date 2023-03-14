/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '876px',
      xl: '1440px'
    }, 
    extend: {
      backgroundImage: {

        'main' : "url('/img/bg.webp')",
      },
      colors: {
        clifford: '#da373d',
                brightred: 'hs(12, 88%, 59%)',
                gideon: 'purple',
                transparent: 'transparent',
      'current': 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'bred': 'red',
      'darksliver': '#565584',
      'milk': '#f5f6ff',
      'offwhite': '#f7f9f8',
      'orange': '#ff4500',
      'gray' : '#eaeff2',
      'brown' : '#a52a2a', 
      'dark-gray' : '#ebebeb', 
      'bord'  : '#d4d7e5', 
      'foot' : '#333333',
      'light-blue' : '#0583F2',
      'hove' : '#ffffff1a',
      'light-black' : '#00000075',
      'dim-white' : '#f5f5f5e3',
        },
    },
  },
  plugins: [],
}
