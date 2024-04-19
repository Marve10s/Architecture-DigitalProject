// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Define unique keys for each input entry point
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
