module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#ffff'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}