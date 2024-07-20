<template>
  <header class="ant-layout-header" :style="{ height }">
    <slot />
  </header>
</template>

<script setup lang="ts">
//  定义属性接口
interface headerProps {
  height?: string
}

// 定义默认属性
withDefaults(defineProps<headerProps>(), {
  height: '60px'
})

defineOptions({
  name: 'BiliHeader'
})
</script>
