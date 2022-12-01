<script lang="ts" setup>
import type { S2DataConfig, S2Options } from '@antv/s2'
import { SheetComponent } from '@antv/s2-vue'
import { defineComponent, onMounted, reactive, ref, shallowRef } from 'vue'
import '@antv/s2-vue/dist/style.min.css'
import { info } from './china.data.js'
const s2DataConfig = {
  fields: {
    rows: ['篇', '章'], // 行头
    // columns: ['pian', 'zhang'],
    values: ['核心内容']
  },
  data: [
    {
      篇: '开启全面建设社会主义现代化国家新征程',
      章: '发展环境',
      核心内容: `
      我们要现代化国家：这个节点是第 2 个百年的首个第 5 年，生产总值突破 100 万亿元，经济实力、科技实力、综合国力
      百年目标的第一个五年
      粮食年产1.3万亿
      金融风险处置
      一带一路
      教育公平
      经济实力、综合国力、人民生活水平
      战略机遇
      经济全球化
      `
    },
    {
      篇: '开启全面建设社会主义现代化国家新征程',
      章: '指导方针',
      核心内容: `
      十九大、十九届二中、三中、四中、五中
      国内大循环为主体
      `
    },
    {
      篇: '开启全面建设社会主义现代化国家新征程',
      章: '主要目标',
      核心内容: `
    
      `
    },
    // 第八篇 -----------------------
    {
      篇: '完善新型城镇化战略 提升城镇化发展质量',
      章: '加快农业转移人口市民化',
      核心内容: `
        户籍制度改革
      `
    },
    {
      篇: '完善新型城镇化战略 提升城镇化发展质量',
      章: '完善城镇化空间布局',
      核心内容: `
        社会主义新型城镇化
        城市群、都市圈
        大中小城市、小型城镇协调联动
        城镇化发展 新型城镇化 城市群 都市圈 城市联动 户籍改革 **放宽落户政策** 常住人口 300 万一下落户限制取消 放宽 300 万至 500 万大城市落户条件 完善 
        空间布局
        两横三纵城镇化战略
        城市群一体化发展
        优化提升：京津冀、长三角、珠三角、成渝、长江中游
        发展壮大：山东半岛、
        现代化都市圈
       
      `
    },
    // 第九篇 -----------------------
    {
      篇: '优化区域经济布局 促进区域协调发展',
      章: '第三十章　优化国土空间开发保护格局',
      核心内容: `
        保障国家重大发展战略落地实施
        中心城市、城市群
        京津冀、长三角、粤港澳大湾区 第一梯队
        中西部提升城市群功能 重要区域
      `
    },
    {
      篇: '优化区域经济布局 促进区域协调发展',
      章: '第三十一章　深入实施区域重大战略',
      核心内容: `
       雄安新区
      `
    },
  ]
}
const s2Options = {
  width: 600,
  height: 500
}
const dataCfg = shallowRef(s2DataConfig)
const options: S2Options = reactive(s2Options)
</script>

<template>
  <SheetComponent :dataCfg="dataCfg" :options="options" />
</template>
