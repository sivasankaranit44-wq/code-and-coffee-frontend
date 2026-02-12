import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // 👈 handles JSX/React transforms
    tailwindcss(),  // 👈 Tailwind plugin
  ],
  base: "./",       // 👈 ensures assets resolve correctly in production
})
