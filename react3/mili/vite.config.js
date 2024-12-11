import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   open: true, // Automatically opens the app in the browser
  // },
  plugins: [react()],
})
