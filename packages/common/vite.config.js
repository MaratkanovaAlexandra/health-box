import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@health-box',
      formats: ['cjs'],
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-native', 'react-dom', 'styled-components'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-native': 'ReactNative',
          'react-dom': 'ReactDOM',
          'styled-components': 'StyledComponents',
        },
      },
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
    },
  },
  plugins: [react(), dts()],
})
