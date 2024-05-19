module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_42": "#00000042" },
        green: { 400: "#6fc07c", "500_60": "#4da65b60" },
        white: { A700: "#ffffff" },
        teal: { 500: "#14af74" },
        blue_gray: { 400: "#8e8a8a" },
        gray: { "300_5b": "#e5e2e25b" },
        yellow: { 800: "#f2a81d" },
      },
      boxShadow: { xs: "0px 4px 4px 0px #0000003f" },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #14af74,#f27329)",
        gradient1: "linear-gradient(180deg, #14af74,#e0f7d5)",
        gradient2: "linear-gradient(90deg, #14af74,#f27329)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
