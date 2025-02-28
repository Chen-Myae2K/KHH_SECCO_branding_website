/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      fontSize: {
        extraSmall : "18px",
        small : "20px",
      },
      colors: {
        ink : "#27272A",
        clean : "#1A6AFC",
      },
      fontFamily: {
       instrument : ["Instrument Sans", "sans-serif"],
       burma : ["Uni Burma", "sans-serif"],
      },
    },
  },
  plugins: [],
}

