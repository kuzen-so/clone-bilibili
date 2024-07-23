<template>
  <div ref="player"></div>
</template>

<script setup lang="ts">
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import { ref, onMounted } from 'vue'
import { faker } from '@faker-js/faker'

// const route = useRoute()
// const { id } = route.params
const player = ref<HTMLElement>()
// 挂砸播放器
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
const commentData = Array.from({ length: 1000 }, (_, key) => {
  return {
    key: key,
    text: faker.lorem.paragraph(1),
    name: faker.internet.displayName()
  }
})
console.log(commentData);

</script>
