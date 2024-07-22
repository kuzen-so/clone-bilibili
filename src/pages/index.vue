<template>
  <Bililayout>
    <a-row :gutter="16">
      <a-col :span="12">
        <!-- 用BetterScroll 替换antdesign的轮博图 -->
        <BiliSlide></BiliSlide>
        <!-- <a-carousel autoplay>
          <div v-for="item in 5" :key="item">
            <img class="car-imgs" :src="`/0${item+1}.png`" alt="" />

          </div>
        </a-carousel> -->
      </a-col>
      <a-col :span="12"> </a-col>
    </a-row>
  </Bililayout>
</template>

<script setup lang="ts">
import Bililayout from '@/layouts/default.vue'
import BiliSlide from '@/components/slider/Slider.vue'
</script>

<style lang="scss">
.car-imgs {
  width: 100%;
  height: 400px;
}
</style>
