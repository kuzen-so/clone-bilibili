<template>
  <!-- 播放器 -->
  <div ref="player"></div>
  <!-- 评论 -->
  <CommentList :list="commentData" />
</template>

<script setup lang="ts">
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import { ref, onMounted } from 'vue'
import { faker } from '@faker-js/faker'
import CommentList from '@/components/comment/CommentList.vue'

const player = ref<HTMLElement>()
// 挂载播放器
onMounted(() => {
  new Player({
    el: player.value,
    height: '720px',
    width: '1080px',
    url: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
    playsinline: true,
    poster: '/02.png'
  })
})

// 制造评论假数据
const commentData = Array.from({ length: 2000 }, (_, key) => {
  return {
    key: key,
    text: faker.lorem.paragraph(1),
    name: faker.internet.displayName()
  }
})
</script>
