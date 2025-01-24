import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: './src/main.js',
      formats: ['es'],
      fileName: 'svelte-bundle',
    },
    outDir: '../static/js/svelte-builds',
    rollupOptions: {
      output: {
        entryFileNames: 'svelte-bundle.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name && chunkInfo.name.endsWith('.css')) {
            return 'svelte-bundle.css';
          }
          return '[name].[ext]';
        },
      },
    }
  },
  server: {
    open: false,
    port: 3000,
  },
});
