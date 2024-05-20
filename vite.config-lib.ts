import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      entryRoot: resolve(__dirname, 'src', 'lib'),
      outDir: 'lib',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'lib', 'react-trianglify.tsx'),
      name: 'ReactTrianglify',
      fileName: 'react-trianglify',
    },
    rollupOptions: {
      external: ['react', 'trianglify'],
      output: {
        dir: 'lib',
        exports: 'named',
        globals: {
          react: 'React',
          trianglify: 'trianglify',
        },
      },
    },
  },
})
