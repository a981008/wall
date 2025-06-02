// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://dummy.com', // 你的后端或 mock 服务地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '') // 根据后端接口是否带 /api 调整
  //     }
  //   }
  // }
})
