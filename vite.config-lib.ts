import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'trianglify.jsx'),
      name: 'ReactTrianglify',
      fileName: 'react-trianglify',
    },
    rollupOptions: {
      external: ['react', 'trianglify'],
      output: {
        dir: 'lib',
        globals: {
          react: 'React',
        },
      },
    },
  },
})
