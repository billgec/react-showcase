import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Showcase ohne Netzwerk-Budget; Code-Splitting lohnt erst, wenn die Seiten gefüllt sind.
    chunkSizeWarningLimit: 1000,
  },
})
