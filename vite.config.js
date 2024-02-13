import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/index.ts', 
      },
      output: {
        entryFileNames: 'bundle.js', 
      },
    },
    outDir: 'dist',
  },
  server:{
    open: '/index.html'
  }
});
