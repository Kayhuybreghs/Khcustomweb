// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import ssr from "file:///home/project/node_modules/vite-plugin-ssr/dist/esm/node/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: true
    })
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    },
    minify: "esbuild",
    cssCodeSplit: true
  },
  ssr: {
    noExternal: ["react-helmet-async"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgc3NyIGZyb20gJ3ZpdGUtcGx1Z2luLXNzci9wbHVnaW4nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBzc3Ioe1xuICAgICAgcHJlcmVuZGVyOiB0cnVlXG4gICAgfSlcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWVcbiAgfSxcbiAgc3NyOiB7XG4gICAgbm9FeHRlcm5hbDogWydyZWFjdC1oZWxtZXQtYXN5bmMnXVxuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFFaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsV0FBVztBQUFBLElBQ2IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGFBQWEsSUFBSTtBQUNmLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsWUFBWSxDQUFDLG9CQUFvQjtBQUFBLEVBQ25DO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
