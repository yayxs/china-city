<script setup lang="ts">
import { WordCloud, G2 } from '@antv/g2plot'
import { onBeforeUnmount } from 'vue'
const theme = G2.getTheme('dark')
G2.registerTheme('customize-dark', {
  ...theme,
  background: 'transparent'
})

let wordCloud

wordCloud = new WordCloud('container', {
  data: [
    {
      name: '1',
      value: 123
    }
  ],
  wordField: 'name',
  weightField: 'value',
  colorField: 'name',
  wordStyle: {
    fontFamily: 'Verdana',
    fontSize: [22, 42],
    rotation: 0
  },
  // theme: isDark.value ? 'customize-dark' : 'light',

  random: () => 0.5
})

wordCloud.render()

onBeforeUnmount(() => {
  wordCloud.destroy()
})
</script>
<template>
  <div id="container"></div>
</template>
