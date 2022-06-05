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
        'dark-green': '#303939',
        'mid-green': '#4A5555',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
