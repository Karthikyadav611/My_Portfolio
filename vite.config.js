import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Optional: raise limit to suppress warning (default is 500 KB)
    rollupOptions: {
      output: {
        manualChunks: {
          // Splits common libraries into separate chunks for better caching
          react: ['react', 'react-dom'],
          threejs: ['three'], // if you use Three.js or heavy libs
        },
      },
    },
  },
});
