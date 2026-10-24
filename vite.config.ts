import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // slimicons führt react/react-dom als dependency statt peerDependency und zieht
  // dadurch ein eigenes React 18 mit; ohne dedupe landen zwei Kopien im Bundle.
  resolve: { dedupe: ['react', 'react-dom'] },
  build: {
    // Showcase ohne Netzwerk-Budget; Code-Splitting lohnt erst, wenn die Seiten gefüllt sind.
    chunkSizeWarningLimit: 1000,
  },
})
