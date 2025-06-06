/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: '/mapview-plan/',
    resolve: {
      alias: [{ find: '@', replacement: '/src' }]
    },
    plugins: [react({ jsxImportSource: '@emotion/react' }), svgr()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'vitest.setup.ts'
    }
  }
})
