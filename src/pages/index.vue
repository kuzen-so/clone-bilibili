<template>
  <Bililayout>
    <a-row :gutter="16">
      <a-col :span="12">
        <!-- 轮播图 -->
        <BiliSlide></BiliSlide>
      </a-col>
      <a-col :span="12"><v-chart class="chart" :option="option" /></a-col>
    </a-row>
    <!-- 卡片列表 -->
    <a-row :gutter="16">
      <a-col :span="6" v-for="video in videos" :key="video.key" style="margin-top: 16px">
        <!-- 点击卡片进行页面跳转 -->
        <router-link :to="'/video/' + video.name">
          <a-card hoverable>
            <!-- 卡片按钮 -->
            <template #actions>
              <PlayCircleOutlined />
              <heart-two-tone two-tone-color="#eb2f96" @click="watchLater" />
            </template>
            <!-- 卡片图片 -->
            <template #cover>
              <img v-lazy="video.image" />
            </template>
            <!-- 卡片文字 -->
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
import type { Video } from '@/apis/mock'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { provide } from 'vue'
import {
  LoadingOutlined,
  PlayCircleOutlined,
  UpSquareOutlined,
  HeartTwoTone
} from '@ant-design/icons-vue'

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
interface AnimateState {
  show: boolean
  el: Element | null
  video: Video | null
}
let animate = reactive<AnimateState>({
  show: false,
  el: null,
  video: null
})

// 点击前
function beforeEnter(el: Element) {
  if (!animate.el) return
  const rect = animate.el.getBoundingClientRect()
  const targetRect = document.querySelector('.animate-ball')!.getBoundingClientRect()

  const startX = rect.left + rect.width / 2
  const startY = rect.top + rect.height / 2
  const endX = targetRect.right - 10
  const endY = targetRect.top + 10

  const translateX = endX - startX
  const translateY = endY - startY

  el.style.left = `${startX}px`
  el.style.top = `${startY}px`
  el.style.transform = `translate(0, 0) scale(1)`

  el.setAttribute('data-end-x', translateX.toString())
  el.setAttribute('data-end-y', translateY.toString())
}
// 点击时
function enter(el: Element, done: () => void) {
  document.body.offsetHeight; // 触发重排
  const translateX = parseFloat(el.getAttribute('data-end-x') || '0');
  const translateY = parseFloat(el.getAttribute('data-end-y') || '0');
  el.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.2)`;
  el.addEventListener('transitionend', done);
}

// 点击后
function afterEnter(el: Element) {
  animate.show = false
  animate.el = null
  console.log('视频已添加到稍后看:', animate.video)
  animate.video = null
}

function watchLater(e: Event) {
  e.stopPropagation(); // 阻止事件冒泡
  animate.show = true;
  animate.el = e.target as Element;
  animate.video = video;
}

//  可视化图表
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

provide(THEME_KEY, 'light')

const option = ref({
  title: {
    text: 'Languages',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['TypeScript', 'JavaScript', 'Scss', 'Other', 'Vue']
  },
  series: [
    {
      name: 'Languages',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'TypeScript' },
        { value: 310, name: 'JavaScript' },
        { value: 234, name: 'Scss' },
        { value: 135, name: 'Other' },
        { value: 985, name: 'Vue' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
</script>

<style lang="scss">
// 卡片大小
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
// 加载按钮
.loading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
// 稍后看动画
.animate-ball .animate {
  position: fixed;
  top: 20px;
  right: 200px;
  z-index: 100;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fb6299;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
