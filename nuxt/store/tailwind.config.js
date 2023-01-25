/** @type {import('tailwindcss/types').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  presets: [require('./src/assets/presets/uinel-shuffle/tailwind.config')],
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.rose,
        primary: colors.blue,
        success: colors.green,
        warning: colors.yellow,

        brand: {
          '50': '#fbf9f1',
          '100': '#f6f2de',
          '200': '#ede2bb',
          '300': '#e1cc90',
          '400': '#d3af62', // default
          '500': '#ca9a45',
          '600': '#bc843a',
          '700': '#9c6a32',
          '800': '#7e542e',
          '900': '#664628',
          DEFAULT: '#d3af62',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xxs': '.625rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
