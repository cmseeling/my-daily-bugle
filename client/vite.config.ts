import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['styled-system']
    }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
