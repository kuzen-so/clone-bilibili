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
      <a-col :span="12"> 123</a-col>
    </a-row>
    <!-- 卡片列表 -->
    <a-row :gutter="16">
      <a-col :span="6" v-for="video in videos" :key="video.key" style="margin-top: 16px">
        <!-- 点击卡片进行页面跳转 -->
        <router-link :to="'/video/'+video.name">
          <a-card hoverable>
            <template #actions>
              <PlayCircleOutlined />
              <LoadingOutlined @click="watchLater" />
            </template>
            <template #cover>
              <img :src="video.image" alt="" />
            </template>
            <a-card-meta :title="video.name" :description="video.text"></a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
    <!-- 稍后看按钮 -->
    <div class="animate-ball">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="animate" v-show="animate.show"></div>
      </transition>
    </div>
    <!-- 回到顶部按钮 -->
    <div class="backtop" v-backtop="400">
      <UpSquareOutlined />
    </div>

    <!-- 加载icon -->
    <div class="loading-icon">
      <LoadingOutlined />
    </div>
  </Bililayout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue'
import Bililayout from '@/layouts/default.vue'
import BiliSlide from '@/components/slider/Slider.vue'
import { getIndexList } from '@/apis/mock'
import type { Video } from '@/apis/types'
import { LoadingOutlined, PlayCircleOutlined, UpSquareOutlined } from '@ant-design/icons-vue'

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
// 稍后看按钮

// const show = ref(true)
let animate = reactive<{
  show: boolean
  el: Element | null
}>({
  show: false,
  el: null
})

// 点击前
function beforeEnter(el: Element) {
  let dom = animate.el!
  let rect = dom.getBoundingClientRect()
  let x = window.innerWidth - rect.left - 230
  let y = rect.top - 10
  // 行首需要先使用一个`;`
  ;(el as HTMLElement).style.transform = `translate(-${x}px, ${y}px)`
}
// 点击时
function enter(el: Element, done: () => void) {
  document.body.offsetHeight
  ;(el as HTMLElement).style.transform = `translate(0,0)`
  el.addEventListener('transitionend', done)
}

// 点击后
function afterEnter(el: Element) {
  animate.show = false
  ;(el as HTMLElement).style.display = 'none'
}

function watchLater(e: Event) {
  animate.show = true
  animate.el = e.target as Element
  e.preventDefault()
}
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

.animate-ball .animate {
  position: fixed;
  top: 15px;
  right: 266px;
  z-index: 100;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fb6299;
  transition: all 1s linear;
}
// 回到顶部按钮样式
.backtop {
  width: 40px;
  height: 40px;
  border-radius: 10%;
  text-align: center;
  line-height: 40px;
  position: fixed;
  right: 10px;
  bottom: 20px;
  // 背景透明
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: none;
}
</style>
