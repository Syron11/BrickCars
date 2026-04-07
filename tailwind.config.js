/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          dark: "#0F0F0F",
          red: "#FF1E1E",
          blue: "#007AFF",
          yellow: "#FFD700",
          gray: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
