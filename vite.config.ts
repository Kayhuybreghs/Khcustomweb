import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    modernize: true,
  },
  server: {
    port: 3000,
  },
  publicDir: 'public',
  assetsInclude: ['**/*.woff2'],
})