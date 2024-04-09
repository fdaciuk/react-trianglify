import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
  ],
  build: {
    rollupOptions: {
      external: ['trianglify'],
      output: {
        format: 'umd',
        globals: {
          trianglify: 'trianglify',
        },
      },
    },
  },
})
