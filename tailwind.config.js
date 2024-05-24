/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         darkblue: "#24243E",
         grey: "#424242",
         black: "#212121",
         lightgrey: "#757575",
         lightash: "#9E9E9E",
      },
    },
    fontFamily: {
        zenkaku: ["Zen Kaku Gothic Antique", "sans-serif"],
    }
  },
  plugins: [],
}

