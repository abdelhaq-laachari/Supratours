/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('../public/background/bg1.jpg')",
        'bg2': "url('../public/background/bg2.jpg')",
        'bg3': "url('../public/background/bg3.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}