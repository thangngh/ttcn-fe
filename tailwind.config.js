module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "card-layout": "2px 2px 8px rgb(0 0 0 / 32%)",
        "card-layout-sm": " 2px 2px 8px rgb(0 0 0 / 25%)",
      },
    },
  },
  plugins: [],
  screen: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1920px",
  },
};
