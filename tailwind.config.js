/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(253 224 71)',
        primarybg: 'rgb(15 23 42)',
        secondarybg: 'rgb(39 39 42)',
        tertiarybg: 'rgb(30 41 59)',
        primarybox: 'rgb(241 245 249)',
        secondarybox: 'rgb(244 244 245)',
      },
      keyframes: {
        gifTransition: {
          '0%': {marginLeft: 'auto', marginRight: '-40%'},
          '50%': {marginLeft: 'auto', marginRight: '20%', opacity: '0.9'},
          '100%': {marginLeft: 'auto', marginRight: '70%', opacity: '0'},
        },
        smGifTransition: {
          '0%': {marginLeft: 'auto', marginRight: '-50%'},
          '50%': {marginLeft: 'auto', marginRight: '0%', opacity: '0.9'},
          '100%': {marginLeft: 'auto', marginRight: '50%', opacity: '0'},
        },
        slideBoxTransition: {
          '0%': {marginLeft: '-55%'},
          '100%': {marginLeft: '0%'},
        }
      },
    },
    animation: {
      'gif-transition': 'gifTransition 2.8s linear',
      'gif-transition2': 'gifTransition 3.5s linear',
      'gif-transition3': 'gifTransition 3s linear',
      'sm-gif-transition': 'smGifTransition 1.8s linear',
      'sm-gif-transition2': 'smGifTransition 2.5s linear',
      'sm-gif-transition3': 'smGifTransition 2s linear',
      'slide-box-transition': 'slideBoxTransition 2s ease-in-out forwards'
    },
  },
  plugins: [],
}
