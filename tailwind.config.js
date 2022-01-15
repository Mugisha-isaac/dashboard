module.exports = {
  purge:[
    './pages/**/*.tsx',
    './components/**/*tsx'
  ],
  content: [],
  theme: {
    extend: {
      colors:{
          primary:'#212530',
          secondary:'#21222D',
          small_white:'#C3E2E1',
          big_white:'#EDF7F6'
      }
    },
  },
  plugins: [],
}
