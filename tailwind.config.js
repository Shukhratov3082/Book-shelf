/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D4D4D",
        mainColor: "#FA7C54",
        white: "#ffff",
        gray: "#8A8A8A",
        lightGray: "#F3F3F7",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/images/login-bg.svg')",
      },
    },
    borderRadius: {
      DEFAULT: "10px",
      sm: "8px",
      large: "40px",
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "24px",
    },
  },
  plugins: [],
};
