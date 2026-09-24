import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static build, same deployment story as the old site: `npm run build`
// emits dist/ as plain files that any host can serve.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false },
});
