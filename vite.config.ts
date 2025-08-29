import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/thorsten-reichelt-website/',
  build: {
    rollupOptions: {
      external: [],
      onwarn(warning, warn) {
        // Ignore unused variable warnings
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      }
    }
  }
})
