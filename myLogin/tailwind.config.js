module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#7A99FF',
        'mid-green': '#A3B8FF',
        'pastel-pnk': '#F670BF',
        'mid-yellow': '#FF9F6B',
        'mid-grey': '#F0F0F0',
      },
      boxShadow: {
        '3xl': '3px 3px 0px 1px white, 4px 4px 0px 2px black',
      }
    },
  },
  plugins: [],
}
