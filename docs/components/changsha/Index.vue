<script setup>
import { Button, Table } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import BK_P1 from '../../../mock/changsha/bk-page1'
import BK_P2 from '../../../mock/changsha/bk-page2'

import { formatList } from '../../utils/index'
const list = ref([])
const list1 = ref([])
const list2 = ref([])

const setData = () => {
  list1.value = formatList(BK_P1.data.list)
  list2.value = formatList(BK_P2.data.list)
  list.value = [...list1.value, ...list2.value]
}
const init = () => {
  setData() // 数据装载
}
onMounted(() => {
  init()
})
</script>
<template>
  <div>
    <!-- <Button @click="handleClick">获取数据</Button> -->
    <div>
      <div v-for="(item, k) in list" class="row">
        <div>{{ item.name }}</div>
        <div>{{ item.averagePrice }}</div>
      </div>
    </div>
    <!-- <Table :dataSource="dataSource" :columns="columns" /> -->
  </div>
</template>

<style lang="scss" scoped>
.row {
  // border: 2px solid red;
  display: flex;
  justify-content: space-between;
}
</style>
