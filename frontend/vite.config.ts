import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import path from 'path';

const cssFileName = 'index.min.css';

export default defineConfig({
  plugins: [
     svgr(), react(),
     TanStackRouterVite(),
  ],
  build: {
    outDir: path.resolve(__dirname, '../dist'), // Set the output directory to myshop/dist
    manifest: 'manifest.json',
    rollupOptions: {
      input: ['/src/main.tsx', './index.html'],
      output: {
        entryFileNames: `assets/js/[name].min.js`, // Output path for JS files
        assetFileNames: `assets/css/${cssFileName}`, // Output path for CSS files
        chunkFileNames: `assets/js/[name]-[hash].js`, // Output path for chunk files
      },
    },
  },
});
