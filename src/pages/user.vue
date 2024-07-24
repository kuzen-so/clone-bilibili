<template>
  <Bililayout>
    <div ref="charts" class="charts"></div>
    <v-chart class="charts" :option="optionPie"></v-chart>
  </Bililayout>
</template>

<script setup lang="ts">
import Bililayout from '@/layouts/default.vue'
import { onMounted, reactive, ref, watchEffect } from 'vue'
import * as echarts from 'echarts'

const charts = ref()
// const chartsPie = ref()

// 使用reactive包裹后图标可以进行动态渲染
const option = reactive({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})

const optionPie = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
}

onMounted(() => {
  const myChart = echarts.init(charts.value)
  watchEffect(() => {
    myChart.setOption(option)
  })
})

// setInterval(() => {
//   option.series[0].data[0] += 3
// }, 2000)

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])
</script>

<style lang="scss">
.charts {
  width: 800px;
  height: 600px;
  margin: 20px auto;
}
</style>
