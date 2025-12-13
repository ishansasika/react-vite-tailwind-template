import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Update this to match your GitHub repository name
  base: '/react-vite-tailwind-template/',
})
