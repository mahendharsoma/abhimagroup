import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1B1B1B",
        "dark-2": "#232323",
        "dark-3": "#2A2A2A",
        orange: "#FECD06",
        "orange-hover": "#D4900A",
        "green-dark": "#2D3A2D",
        "green-btn": "#3A4A3A",
        light: "#F5F4F0",
        "light-2": "#EEEEE8",
        "gray-text": "#6B6B6B",
        "gray-border": "#D5D5D0",
        "body-text": "#3A3A3A",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
