/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'dark-green': '#013601', // Your custom dark green color
      },
    },
  },
  plugins: [],
}



