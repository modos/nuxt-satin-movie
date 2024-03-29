const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      button: '#ff4757',
      buttonHoverBackground: '#f1f1f1',
      buttonHoverText: '#252f40',
      footerBackground: '#282d33',
      footerTagBoxBackground: '#23282d'
    },
    extend: {
      boxShadow: {
        'header': '0 2px 10px rgba(160,178,200,.2)',
      },
      padding: {
        'button': '6px 14px 7px 14px'
      }
    },
  },
  plugins: [],
}
