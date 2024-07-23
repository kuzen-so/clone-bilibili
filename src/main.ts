// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import backtup from './directives/backtup'

import { createPinia } from 'pinia'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})




app.directive('backtop', backtup)
app.use(router)
app.use(createPinia())
app.mount('#app')
