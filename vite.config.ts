import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'


import VueRouter from 'unplugin-vue-router/vite'


import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
