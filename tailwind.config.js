module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        //"hero-main-baner": "url('assets/img/wave.svg')",
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
