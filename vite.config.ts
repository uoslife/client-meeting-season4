import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      plugins: [['@swc/plugin-emotion', {}]],
    }),
    // mkcert(),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' },
      {
        find: 'react-native',
        replacement: 'react-native-web',
      },
    ],
  },
});
