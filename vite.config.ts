import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import history from 'connect-history-api-fallback'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'spa', // ← Active le fallback automatique vers index.html
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})