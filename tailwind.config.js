module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-lg': "url('assets/img/career-intro-bg.jpg')",
        'hero-sm': "url('assets/img/career_header.png')",
      }),
      colors:{
        'gray-body': '#f5f5f5'
      }
    },
  },
  plugins: [],
}
