/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Windows: Vite resolves some paths through realpath (C:...) and others as typed (c:...,
    // e.g. a VS Code terminal), so one package is bundled twice. That duplicated React and
    // TanStack Query's context ("useCallback of null", "No QueryClient set"). Keep one spelling.
    preserveSymlinks: true,
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    env: {
      VITE_API_URL: 'http://localhost:8000/api/v1',
      VITE_SITE_URL: 'http://localhost:5173',
    },
  },
})
