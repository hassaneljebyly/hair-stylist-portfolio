import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hair-stylist-portfolio/build/', // Change to the name of your repository
  build: {
    outDir: 'build', // Ensure your build output goes to a specific directory
    emptyOutDir: true,
  },
});
