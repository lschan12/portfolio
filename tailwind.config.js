/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in",
        slideDown: "slideDown 1s ease-in"
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        },
        slideDown: {
          "0%": {left: "-100px"},
          "100%": {left: "0px"}
        }
      }
    },
  },
  variants: {
    animation: ['motion-safe']
  },
  plugins: [],
}
