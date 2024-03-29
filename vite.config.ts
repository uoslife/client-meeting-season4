import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
  ],
  resolve: {
    alias: [{ find: '~', replacement: '/src' }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173/',
        changeOrigin: true,
      },
    },
  },
});
