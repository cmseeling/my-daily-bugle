import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "styled-system": path.resolve(__dirname, "./styled-system"),
      $components: path.resolve(__dirname, "./src/components"),
      $api: path.resolve(__dirname, "./src/api"),
      $storybook: path.resolve(__dirname, "./src/storybook"),
    },
  },
});
