<script lang="ts" setup>
import type { S2DataConfig, S2Options } from '@antv/s2'
import { SheetComponent } from '@antv/s2-vue'
import { defineComponent, onMounted, reactive, ref, shallowRef } from 'vue'
import '@antv/s2-vue/dist/style.min.css'
const s2DataConfig = {
  fields: {
    rows: ['province', 'city'],
    columns: ['type'],
    values: ['price']
  },
  data: [
    {
      province: '浙江',
      city: '杭州',
      type: '笔',
      price: '1'
    },
    {
      province: '浙江',
      city: '杭州',
      type: '纸张',
      price: '2'
    },
    {
      province: '浙江',
      city: '舟山',
      type: '笔',
      price: '17'
    },
    {
      province: '浙江',
      city: '舟山',
      type: '纸张',
      price: '6'
    },
    {
      province: '吉林',
      city: '长春',
      type: '笔',
      price: '8'
    },
    {
      province: '吉林',
      city: '白山',
      type: '笔',
      price: '12'
    },
    {
      province: '吉林',
      city: '长春',
      type: '纸张',
      price: '3'
    },
    {
      province: '吉林',
      city: '白山',
      type: '纸张',
      price: '25'
    },
    {
      province: '浙江',
      city: '杭州',
      type: '笔',
      cost: '0.5'
    },
    {
      province: '浙江',
      city: '杭州',
      type: '纸张',
      cost: '20'
    },
    {
      province: '浙江',
      city: '舟山',
      type: '笔',
      cost: '1.7'
    },
    {
      province: '浙江',
      city: '舟山',
      type: '纸张',
      cost: '0.12'
    },
    {
      province: '吉林',
      city: '长春',
      type: '笔',
      cost: '10'
    },
    {
      province: '吉林',
      city: '白山',
      type: '笔',
      cost: '9'
    },
    {
      province: '吉林',
      city: '长春',
      type: '纸张',
      cost: '3'
    },
    {
      province: '吉林',
      city: '白山',
      type: '纸张',
      cost: '1'
    }
  ]
}
const s2Options = {
  width: 600,
  height: 480
}
const dataCfg = shallowRef(s2DataConfig)
const options: S2Options = reactive(s2Options)
</script>

<template>
  <SheetComponent :dataCfg="dataCfg" :options="options" />
</template>
