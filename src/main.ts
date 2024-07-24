import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import backtop from './directives/backtop'
import lazyLoad from './directives/lazy'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.directive('backtop', backtop)
app.directive('lazy', lazyLoad)
app.use(router)
app.use(createPinia())
app.mount('#app')
