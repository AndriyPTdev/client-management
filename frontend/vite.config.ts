import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: { 
        // Точний аналог вашого Nuxt styleResources. 
        // Імпортуємо СУТО заготовки інструментів, які нічого не рендерять самі по собі.
        additionalData: `
          @use "@/styles/functions" as *;
          @use "@/styles/mixins" as *;
        `
      }
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 16,
          minPixelValue: 3,       // Взято з твого Nuxt-конфігу (дрібниці менше 3px не конвертувати)
          propList: ['*'],
          selectorBlackList: [/::-webkit-scrollbar.*$/], // Взято з твого Nuxt-конфігу (не ламати скролбари)
        })
      ]
    }
  }
})
