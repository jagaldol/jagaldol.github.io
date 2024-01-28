/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "main-theme": "#3C3C8F",
        "bg": "#F1F1F5",
      },
      fontFamily: {
        GmarketSansMedium: [
          "GmarketSansMedium",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        GmarketSans: [
          "GmarketSans",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
        SUITRegular: [
          "SUIT-Regular",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}
