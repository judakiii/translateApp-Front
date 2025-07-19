import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// __dirname is not available in ES modules by default, but Vite handles it internally
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@context': path.resolve(__dirname, './src/context'),
    }
  }
})
