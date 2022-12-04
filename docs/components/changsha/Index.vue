<script setup>
import { ref, onMounted, reactive } from 'vue'
import { PivotSheet } from '@antv/s2'
import { Button, Table } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import LIST from '../../../mock/changsha'
import { setWaterMark } from '../../utils/watermark'
const list = ref([])

const setData = () => {
  list.value = LIST
}
const renderTable = () => {
  const container = document.getElementById('table')
  const s2DataConfig = reactive({
    fields: {
      columns: ['name', 'averagePrice'],
      values: ['averagePrice'],
      data: list.value
    }
  })

  const s2 = new PivotSheet(container, s2DataConfig, {
    width: 600,
    height: 480
  })

  s2.render()
}
const init = () => {
  setData() // 数据装载
  setWaterMark('视野中国', 'vanlee')
  // renderTable()
}
onMounted(() => {
  init()
})
</script>
<template>
  <div>
    <div class="total-num">以下有{{ list.length }}个小区</div>
    <div class="table-container">
      <table>
        <tr v-for="(item, k) in list">
          <td>{{ item.name }}</td>
          <td>{{ item.averagePrice }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style>
* {
  -webkit-user-select: none;
}
</style>
