import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

const storage = useStorage('bili-token', '')

// composition 风格
export const useTokenStore = defineStore('token', () => {
  const token = ref(storage.value || '')
  const isLogin = computed(() => !!token.value)

  const setToken = (val: string) => {
    token.value = val
    storage.value = val
  }
  return {
    token,
    isLogin,
    setToken
  }
})
