import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target:'http://localhost:3000',
        secure: false,
      },
    },
   headers: {
    "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
   },
  },
  plugins: [
    tailwindcss(),
  ],
})