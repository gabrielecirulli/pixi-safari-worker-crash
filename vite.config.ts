import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  worker: {
    format: 'es',
  },
  build: {
    sourcemap: true,
  },
});
