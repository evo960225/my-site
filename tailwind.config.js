module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['genyog','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    

    
    extend: {
      height: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '80vh': '80vh',
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
        '030' : '.3rem',
        '050' : '.5rem'
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
      filter: ['hover', 'group-hover'],
      brightness: ['hover', 'group-hover'],
      dropShadow: ['hover', 'group-hover'],
    }
  },
  plugins: [],
}
