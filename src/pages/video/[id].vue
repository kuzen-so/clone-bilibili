<template>
  <Bililayout>
    <div class="centered-content">
      <div ref="player" class="video-player"></div>
      <!-- 评论 -->
      <div class="comment-container">
        <CommentList :list="commentData" />
      </div>
    </div>
  </Bililayout>
</template>

<script setup lang="ts">
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import { ref, onMounted } from 'vue'
import { faker } from '@faker-js/faker'
import CommentList from '@/components/comment/CommentList.vue'
import Bililayout from '@/layouts/default.vue'

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

<style scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}

.video-player {
  width: 100%;
  max-width: 1080px;
}

.comment-container {
  width: 100%;
  max-width: 1080px;
  height: 600px; /* 设置一个固定高度 */
  margin-top: 20px; /* 在视频播放器和评论之间添加一些间距 */
  overflow: hidden; /* 确保不会出现额外的滚动条 */
}
</style>