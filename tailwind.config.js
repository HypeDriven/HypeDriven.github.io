module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        "primary-bg": "#000026",
        "secondary-bg": "#E8E8FF",

        // Button colors
        "primary-button": "#9B5AFF",
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
