import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

import { createPinia } from 'pinia'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(createPinia())

app.use(router)
app.mount('#app')
