<template>
  <Bililayout>
    <BiliHeader :style="{ background: '#fff', height: '250px', color: '#fff' }">
      <!-- 头部组件 -->
      <PageHeader></PageHeader>
    </BiliHeader>
    <Bililayout>
      <BiliContent><slot></slot></BiliContent>
    </Bililayout>

    <BiliFooter></BiliFooter>
  </Bililayout>
</template>

<script setup tang="ts">
import BiliHeader from '@/components/layout/Header.vue'
import BiliContent from '@/components/layout/Content.vue'
import BiliFooter from '@/components/layout/Footer.vue'
import Bililayout from '@/components/layout/Layout.vue'
import PageHeader from '../components/pageHeader/PageHeader.vue'
</script>

<style lang="scss"></style>
