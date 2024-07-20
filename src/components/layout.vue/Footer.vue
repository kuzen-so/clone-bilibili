<template>
  <footer class="ant-layout-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script setup lang="ts">
interface FooterProps {
  height?: string
}
withDefaults(defineProps<FooterProps>(), {
  height: '60px'
})

defineOptions({
  name: 'BiliFooter'
})
</script>
<style>
.ant-layout-footer {
  text-align: center;
}
</style>
