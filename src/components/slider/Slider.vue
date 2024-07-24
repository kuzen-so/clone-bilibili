<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="slide-banner-wrapper" ref="slide">
        <div class="slide-banner-content">
          <div v-for="item in 5" :key="item" class="slide-page">
            <img class="car-imgs" :src="`/0${item + 1}.png`" alt="" />
          </div>
        </div>
        <div class="dots-wrapper">
          <span
            class="dot"
            v-for="item in 5"
            :key="item"
            :class="{ active: currentPageIndex === item - 1 }"
          >
          </span>
          <!-- 设置俩个前进后退按钮 当`<`单独使用时会出现报错 需要用`&lt;`进行替换-->
          <button class="nav-button prev" @click="prevpage">&lt;</button>
          <button class="nav-button next" @click="nextpage">></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, ref } from 'vue'

BScroll.use(Slide)

// let nums = ref(4)
let currentPageIndex = ref(0)

let slider: any = ref()
let slide = ref<HTMLElement>()

onMounted(() => {
  slider.value = new BScroll(slide.value as HTMLElement, {
    scrollX: true,
    scrollY: false,
    slide: true,
    momentum: false,
    bounce: false
  })
  slider.value.on('slideWillChange', (page:any) => {
    currentPageIndex.value = page.pageX
  })
})
function prevpage() {
  slider.value.prev()
}

function nextpage() {
  slider.value.next()
}
</script>

<style lang="scss">
.slide-banner {
  .banner-wrapper {
    position: relative;
  }
  .slide-banner-wrapper {
    min-height: 1px;
    overflow: hidden;
  }
  .slide-banner-content {
    height: 400px;
    white-space: nowrap;
    font-size: 0;
    .slide-page {
      display: inline-block;
      height: 200px;
      width: 100%;
      line-height: 200px;
      text-align: center;
      font-size: 26px;
    }
  }
  .dots-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;

      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
  .nav-buttons-wrapper {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
  }

  .nav-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 10px;
  }

  .prev {
    margin-right: 20px;
  }
}
</style>
