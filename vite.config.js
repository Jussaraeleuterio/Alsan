import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    host: true, // Permite acesso na rede local (para testar no celular)
    strictPort: false // Tenta outra porta se 3000 estiver ocupada
  }
})
