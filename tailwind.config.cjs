const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ['var(--font-fredericka)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
