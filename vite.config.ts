import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginSsr from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [
    react(),
    VitePluginSsr({
      prerender: true
    })
  ],
  build: {
    target: 'esnext',
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
  },
  ssr: {
    // Enable SSR features
    noExternal: ['react-helmet-async']
  }
});