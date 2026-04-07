import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВАЖНО: Добавь эту строку для деплоя на GitHub Pages
  base: "/BrickCars/",
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});
