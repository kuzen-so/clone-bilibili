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

    <a-row :gutter="16">
      <a-col :span="6" v-for="video in videos" :key="video.key" style="margin-top: 16px">
        <a-card hoverable>
          <template #cover>
            <img :src="video.image" alt="" />
          </template>
          <a-card-meta :title="video.name" :description="video.text"></a-card-meta>
        </a-card>
      </a-col>
    </a-row>

    <div class="loading-icon">
      <LoadingOutlined />
    </div>
  </Bililayout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Bililayout from '@/layouts/default.vue'
import BiliSlide from '@/components/slider/Slider.vue'
import { getIndexList } from '@/apis/mock'
import type { Video } from '@/apis/types'
import { LoadingOutlined } from '@ant-design/icons-vue'

let current = 0
let videos = ref<Video[]>([])

onMounted(async () => {
  videos.value = await getIndexList(current)
})

const sroll = async () => {
  const srollHeight = document.documentElement.scrollHeight
  const srollTop = document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight

  if (srollTop + clientHeight >= srollHeight) {
    current++
    let newVideos = await getIndexList(current)

    videos.value = [...videos.value, ...newVideos]
  }
}

onMounted(() => {
  window.addEventListener('scroll', sroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', sroll)
})
</script>

<style lang="scss">
.car-imgs {
  width: 100%;
  height: 400px;
}
// 卡片文本溢出截断
.ant-card-meta-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.loading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>
