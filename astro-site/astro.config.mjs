// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages serves this repo at /pizzaworld-redesign/.
  // This keeps Astro CSS/assets loading correctly on the live URL.
  base: '/pizzaworld-redesign',
  build: {
    // Keep existing GitHub Pages URLs like /franchise.html intact.
    format: 'file',
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
