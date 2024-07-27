<template>
  <footer class="ant-layout-footer" :style="{ height }">
    <div class="line">
      <hr />
      @Copyright https://clone-bilibili-626ejxnze-chumenlus-projects.vercel.app
    </div>
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
