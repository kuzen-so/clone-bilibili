<template>
  <div ref="container" class="container" @scroll="scroll">
    <div class="placeholder" :style="{ height: placeholderHeight + 'px' }"></div>
    <div class="list" ref="list" :style="{ transform: viewTransform }">
      <div v-for="item in visibleData" :key="item.key" class="item">
        <span class="comment-user"> {{ item.name }}</span>
        <span class="comment-text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface CommentProps {
  list: {
    key: number
    text: string
    name: string
  }[]
}

const props = defineProps<CommentProps>()

// 设定评论高度
const HEIGHT = 60
const start = ref(0)

// const list = ref()
const container = ref()

const viewTransform = ref('translate3d(0,0,0)')
const visibleData = ref<CommentProps['list']>([])

const placeholderHeight = props.list.length * HEIGHT

const positions = ref<{ height: number; top: number }[]>([])

onMounted(() => {
  //初始值
  const containerDom = container.value
  const viewHeight = containerDom?.clientHeight || 800 //可视区高度
  const visableCount = Math.ceil(viewHeight / HEIGHT) // 可视区元素数量
  const end = start.value + visableCount // 可视区最后一个元素的索引位置
  visibleData.value = props.list.slice(start.value, end)
  positions.value = props.list.map((_, i) => {
    return {
      height: HEIGHT,
      top: i * HEIGHT //每个元素距离顶部的长度
    }
  })
})

function scroll(e: Event) {
  const scrollTop = (e.target as HTMLElement).scrollTop
  const containerDom = container.value
  const viewHeight = containerDom.clientHeight || 800 //可视区高度
  // 新的元素
  const newStart =
    positions.value?.findIndex((item) => {
      return item.top + item.height > scrollTop
    }) || 0
  const visableCount = Math.ceil(viewHeight / HEIGHT) // 可视区元素数量
  const end = newStart + visableCount // 可视区最后一个元素的索引位置
  visibleData.value = props.list.slice(newStart, end)

  start.value = newStart
  const transformOffset =
    newStart >= 1 ? positions.value[newStart - 1].top + positions.value[newStart - 1].height : 0
  // console.log({ transformOffset })
  viewTransform.value = `translate3d(0,${transformOffset}px,0)`
}
</script>

<style lang="scss">
.container {
  height: 800px;
  position: relative;
  overflow: auto;
}
.placeholder {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
}
.list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
}
.item {
  height: 40px;
  font-size: 20px;
}
.comment-title {
  font-weight: bold;
}
.comment-text {
  display: inline-block;
  margin-left: 10px;
}
</style>
