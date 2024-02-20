/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/**/*.{js,jsx,ts,tsx,mdx}`,
    'gatsby-browser.js',
  ],
  theme: {
    extend: {
      colors: {
        "main-theme": "#778899",
        "bg": "#F1F1F5",
      },
      fontFamily: {
        GmarketSansMedium: [
          "GmarketSansMedium",
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
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      animation: {
        moveUpDown: 'moveUpDown 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
