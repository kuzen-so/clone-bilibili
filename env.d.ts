// Vite 环境变量类型声明

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  // 在这里定义其他环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
