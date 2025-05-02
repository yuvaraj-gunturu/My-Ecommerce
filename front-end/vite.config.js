import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ]
  // base : import.meta.env.VITE_BASE_PATH || "/My-Ecommerce"
});

