import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  base: '/hair-stylist-portfolio/build/',
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
