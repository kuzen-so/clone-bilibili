<template>
  <aside class="ant-layout-sider" :style="{width}">
    <slot />
  </aside>
  </template>
  
  <script setup lang="ts">


interface SiderProps {
    width?: string
  }

  withDefaults(defineProps<SiderProps>(),{
    width: '200px'
  })
  defineOptions({
  name: 'BiliSider'
})
  </script>