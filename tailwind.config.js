/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#000000',
        blue:'#1D75DE',
        light:'#ffffff',
        green:'#1DB954'
      }
    },
    // container:{
    //   center:true,
    //   padding:'15px',
      
    // },
  },
  plugins: [],
}
