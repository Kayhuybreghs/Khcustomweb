import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Optional: import vite-plugin-pwa if you want PWA support
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',
    // Enable minification for production
    minify: 'esbuild',
    cssCodeSplit: true,
    // Enable modern build targeting modern browsers
    modernize: true,
  },
  server: {
    // Specify the port number, if needed
    port: 3000,
  },
  // Uncomment the following to enable PWA if you want to use Service Workers and caching
  // pwa: {
  //   registerType: 'autoUpdate',
  //   workbox: {
  //     runtimeCaching: [
  //       {
  //         urlPattern: /\/$/,
  //         handler: 'NetworkFirst',
  //       },
  //     ],
  //   },
  // },
})
