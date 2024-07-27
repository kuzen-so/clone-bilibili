<template>
  <section class="ant-layout" :class="classes">
    <slot />
  </section>
</template>

<script setup lang="ts">
import type { Component, VNode } from 'vue'
import { useSlots } from 'vue'
import 'ant-design-vue/dist/reset.css'

function useClasses() {
  const slots = useSlots()
  let hasSider = false
  if (slots && slots.default) {
    const vndes: VNode[] = slots.default()
    hasSider = vndes.some((vnode: VNode) => {
      const component = vnode.type as Component
      console.log(component.name)
      return component.name === 'BiliSider'
    })
  }
  return hasSider ? 'ant-layout-has-sider' : ''
}
const classes = useClasses()

defineOptions({
  name: 'Bililayout'
})
</script>
