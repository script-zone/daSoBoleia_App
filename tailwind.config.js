/** @type {import('tailwindcss').Config} */

export const themeCustom = {
  colors: {
    black: "#121214",
    green: "#217356",
    greenLigth: "#238C66",
    gray700: "#5A5A61",
    gray500: "#202024",
    gray800: "#797983",
    red: "#741C1C",
    blue: "#7AEDED",
    white: "#FFFFFF",
    white500: "#E8E8E8",
  },
  fontFamily: {
    robotoRegular: "oboto_400Regular",
    roboto500Medium: "Roboto_500Medium",
    roboto700Bold: "Roboto_700Bold",
  },
};

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/routers/**/*.{ts,tsx}",
  ],
  theme: {
    ...themeCustom,
    plugins: [],
  },
};
