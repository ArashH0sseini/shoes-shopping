module.exports = {
  important: true,
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%'
      },
      boxShadow: {
        'custom': '1px 0px 3px 0px #3b3939'
      }
    }
  },
  plugins: []
}
