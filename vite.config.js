import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000, // Ajusta el límite según tus necesidades
    outDir: 'build', // Cambia 'build' al nombre de la carpeta que deseas
  },
})
