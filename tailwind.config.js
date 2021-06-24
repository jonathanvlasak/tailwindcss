const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: { 
                
            },
            h1: {
              fontSize: '1.5rem',
              color: '#3C6661',
              fontWeight: '600',
              lineHeight: '1'
            },
            h3: {
              color: '#3C6661',
            },
          },
        },
      },
      colors: {
        green: {
          850: '#3C6661',
          650: '#84997A',
          550: '#9DB9BB'
        },
        blue: {
          550: '#4793ad'
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        sans : ['Inter', 'sans-serif'],
        header: ['serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme }) {
      addBase({
        'li a': { 
          color: theme('colors.green.800'),
          fontSize: theme('fontSize.xl'),
          },
        'h1': { 
            color: theme('colors.blue.550'),
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.semibold'),
          },
          'p': { 
            fontSize: theme('fontSize.sm'),
          },
      })
    })
  ],
}
