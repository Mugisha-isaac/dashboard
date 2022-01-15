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
          small_white:'#83C3C0',
          big_white:'#EDF7F6'
      }
    },
  },
  plugins: [],
}
