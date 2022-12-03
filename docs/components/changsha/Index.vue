<script setup>
import { reactive } from 'vue'
import { PivotSheet } from '@antv/s2'
import { Button, Table } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import LIST from '../../../mock/changsha'

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
  // renderTable()
}
onMounted(() => {
  init()
})
</script>
<template>
  <div>
    <div id="table-container">
      <table>
        <tr v-for="(item, k) in list">
          <td>{{ item.name }}</td>
          <td>{{ item.averagePrice }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  // border: 2px solid red;
  display: flex;
  justify-content: space-between;
}
</style>
