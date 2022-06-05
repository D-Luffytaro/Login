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
        'dark-green': '#22C993',
        'mid-green': '#45D4A5',
        'pastel-pnk': '#F69191',
        'mid-yellow': '#FBD750',
        'mid-grey': '#F0F0F0',
      },
      boxShadow: {
        '3xl': '3px 3px 0px 1px white, 4px 4px 0px 2px black',
      }
    },
  },
  plugins: [],
}
