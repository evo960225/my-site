const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['genyog','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.blueGray,
      yellow: colors.amber,
    },
    
    extend: {
      screens: {
        'xs': '480px'
      },
      height: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '80vh': '80vh',
      },
      minWidth: {
        '25vw': '25vw',
        '30vw': '30vw',
        '250': '250px',
        '300': '300px',
      },
      minHeight: {
        '70vh': '70vh',
      },
      maxHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '80vh': '80vh',
      },
      letterSpacing:{
        '010' : '.1rem',
        '020' : '.2rem',
        '030' : '.3rem',
        '050' : '.5rem',
        '070' : '.7rem',
        '090' : '.9rem',
        '120' : '1.2rem',
        '150' : '1.5rem',
        '180' : '1.8rem',
      },
      grayscale: {
        50: '50%',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      brightness: {
        '90': '.90',
        '95': '.95'
      },
      opacity: {
        '85': '.85',
        '95': '.95',
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      filter: ['hover', 'group-hover'],
      brightness: ['hover', 'group-hover'],
      dropShadow: ['hover', 'group-hover'],
      animation: ['hover', 'group-hover'],
    }
  },
  plugins: [
    
  ],
}
