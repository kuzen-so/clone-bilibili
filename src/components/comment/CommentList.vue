<template>
  <div ref="container" class="container" @scroll="scroll">
    <div class="placeholder" :style="{ height: placeholderHeight + 'px' }"></div>
    <div class="list" :style="{ transform: viewTransform }">
      <div v-for="item in visibleData" :key="item.key" class="item">
        <span class="comment-user">{{ item.name }}</span>
        <span class="comment-text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowRef, watchEffect } from 'vue'

interface CommentItem {
  key: number
  text: string
  name: string
}

interface CommentProps {
  list: CommentItem[]
}

const props = defineProps<CommentProps>()

const HEIGHT = 60
const start = ref(0)
const container = ref<HTMLElement | null>(null)

const viewTransform = ref('translate3d(0,0,0)')
const visibleData = shallowRef<CommentItem[]>([])

const placeholderHeight = ref(0)
const positions = shallowRef<{ height: number; top: number }[]>([])

watchEffect(() => {
  placeholderHeight.value = props.list.length * HEIGHT
  positions.value = props.list.map((_, i) => ({
    height: HEIGHT,
    top: i * HEIGHT
  }))
})

onMounted(() => {
  updateVisibleData()
})

function updateVisibleData() {
  const containerElement = container.value
  if (!containerElement) return

  const scrollTop = containerElement.scrollTop
  const viewHeight = containerElement.clientHeight
  const visibleCount = Math.ceil(viewHeight / HEIGHT)

  const newStart = positions.value.findIndex(item => item.top + item.height > scrollTop) || 0
  const end = newStart + visibleCount

  visibleData.value = props.list.slice(newStart, end)
  start.value = newStart

  const transformOffset = newStart > 0 ? positions.value[newStart - 1].top : 0
  viewTransform.value = `translate3d(0,${transformOffset}px,0)`
}

function scroll() {
  requestAnimationFrame(updateVisibleData)
}
</script>

<style scoped>
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
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.item {
  height: 60px;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
}
.comment-user {
  font-weight: bold;
  margin-right: 10px;
}
.comment-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>