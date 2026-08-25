// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The production GitHub Pages site is served from the custom domain root.
  site: 'https://pizzaworldfranchise.com',
  base: '/',
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
