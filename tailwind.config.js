/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
    animation: {
      'loop-scroll': 'loop-scroll 50s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    }   
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};