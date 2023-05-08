module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs':{'min': '320px', 'max': '424px'},
        'xs': {'min': '425px', 'max': '575.5px'},
        'sm': {'min': '576px', 'max': '767.5px'},
        '1xl': '1440px',
        '3xl': '1600px',
        '4xl': '1750px',
        '5xl': '1850px',
        '6xl': '2050px',
        '7xl': '2200px'
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "hero-lg": "url('assets/img/career-intro-bg.jpg')",
        "hero-sm": "url('assets/img/career_header.png')",
        "hero-home-page-bg": "url('assets/img/home-hero-bg.svg')",
      }),
      headers: {},
      colors: {
        // Background colors
        "main-bg": "#9DD3E1",
        "primary-bg": "#00007E",
        "secondary-bg": "#FFFFFF",

        // Button colors
        "primary-button": "#150DCE",
        "secondary-button": "#7419FF",

        //
        "accent-orange": "#FFA834",

        //Error colors
        "primary-error": "#F03738",

        // Text colors
        "primary-text": "#FFFFFF",
        "header-text": "#0B0B0B",
        "gray-body": "#f5f5f5",
        "turquoise-blue": "#00C5FF",
      },
    },
  },
  plugins: [],
};
