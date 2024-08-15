/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        modeBlackTheme: "hsl(207, 26%, 17%)",
        modeLightTheme: "hsl(0, 0%, 100%)",
        veryDarkTheme: "hsl(209, 23%, 22%)",
        lightWhite: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};