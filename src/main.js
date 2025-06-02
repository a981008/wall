import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'

async function bootstrap() {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    await import('@/mock')  // 等待 mock 加载完毕
    console.log('[mock] mock module loaded')
  }

  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
}

bootstrap()
