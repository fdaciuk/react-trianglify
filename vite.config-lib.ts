import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'trianglify.jsx'),
      name: 'ReactTrianglify',
      fileName: 'react-trianglify',
    },
    rollupOptions: {
      external: ['react', 'trianglify'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
