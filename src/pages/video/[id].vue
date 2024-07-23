<template>
  <div ref="player"></div>
  123
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router'
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import { ref, onMounted } from 'vue'

// const route = useRoute()
// const { id } = route.params
const player = ref<HTMLElement>()
onMounted(() => {
  new Player({
    el: player.value,
    height: '720px',
    width: '1080px',
    url: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
    playsinline: true,
    poster:'/02.png'
  })
})
</script>
