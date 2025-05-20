import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactStatic from '@vitejs/plugin-react-static';

export default defineConfig({
  plugins: [
    react(),
    reactStatic({
      // Pre-render these routes at build time
      routes: ['/', '/projecten', '/contact'],
      // Enable static site generation
      ssr: true,
      // Optimize chunks
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom']
      }
    })
  ],
  build: {
    target: 'esnext',
    // Generate static HTML for each route
    ssrManifest: true,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // Minify output
    minify: 'esbuild',
    // Split CSS
    cssCodeSplit: true
  }
});