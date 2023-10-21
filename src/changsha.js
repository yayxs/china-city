/**
 * address 地址
 * address_remark 地址详情
 * average_price 平均价格
 * district 区
 * show_price 在售价格
 */
import all1 from '../mock/changsha/all1.js'
import all2 from '../mock/changsha/all2.js'
import all3 from '../mock/changsha/all3.js'
import all4 from '../mock/changsha/all4.js'
import all5 from '../mock/changsha/all5.js'
import all6 from '../mock/changsha/all6.js'
import all7 from '../mock/changsha/all7.js'
import all8 from '../mock/changsha/all8.js'
import all9 from '../mock/changsha/all9.js'
import all10 from '../mock/changsha/all10.js'
import all11 from '../mock/changsha/all11.js'
import all12 from '../mock/changsha/all12.js'
import all13 from '../mock/changsha/all13.js'
import all14 from '../mock/changsha/all14.js'
import all15 from '../mock/changsha/all15.js'
import all16 from '../mock/changsha/all16.js'
import all17 from '../mock/changsha/all17.js'
import all18 from '../mock/changsha/all18.js'
const {
  data: { list: data1 }
} = all1
const {
  data: { list: data2 }
} = all2
const {
  data: { list: data3 }
} = all3
const {
  data: { list: data4 }
} = all4
const {
  data: { list: data5 }
} = all5
const {
  data: { list: data6 }
} = all6
const {
  data: { list: data7 }
} = all7
const {
  data: { list: data8 }
} = all8
const {
  data: { list: data9 }
} = all9
const {
  data: { list: data10 }
} = all10
const {
  data: { list: data11 }
} = all11
const {
  data: { list: data12 }
} = all12
const {
  data: { list: data13 }
} = all13
const {
  data: { list: data14 }
} = all14
const {
  data: { list: data15 }
} = all15
const {
  data: { list: data16 }
} = all16
const {
  data: { list: data17 }
} = all17
const {
  data: { list: data18 }
} = all18
console.log(data1)
// const data = [
//   { type: '收纳', value: 340, cat: '办公用品' },
//   { type: '笔', value: 20760, cat: '办公用品' },
//   { type: '纸张', value: 28750, cat: '办公用品' },
//   { type: '配件', value: 4090, cat: '技术' },
//   { type: '电话', value: 9880, cat: '技术' },
//   { type: '复印机', value: 40988, cat: '技术' },
//   { type: '桌子', value: 14870, cat: '家具' },
//   { type: '椅子', value: 37098, cat: '家具' },
//   { type: '书架', value: 49099, cat: '家具' },
// ]

const allData = [
  ...data1,
  ...data2,
  ...data3,

  ...data4,
  ...data5,
  ...data6,

  ...data7,
  ...data8,
  ...data9,
  ...data10,
  ...data11,
  ...data12,
  ...data13,

  ...data14,
  ...data15,
  ...data16,
  ...data17,
  ...data18
]

const LEN = allData.length
console.log('长沙在售总数量', LEN)

const KAI_FU = [] // 开福
const YUE_LU = [] // 岳麓
const YU_HUA = [] // 雨花
const FU_RONG = [] // 芙蓉
const TIAN_XIN = [] // 天心
const WANG_CHENG = [] // 望城
const CHANG_SHA_XIAN = [] // 长沙县

allData.forEach((it) => {
  console.log(it.district)
})

const data = allData.map((it) => ({
  name: it.title,
  value: parseFloat(it.show_price),
  district: it.district
}))

const chart = new G2.Chart({
  container: 'all-container',
  autoFit: true,
  height: 600,
  padding: [20, 100, 50, 120]
})

chart.data(data)
chart.scale({
  value: {
    alias: '平/X元'
  }
})
chart.axis('name', {
  tickLine: null,
  line: null
})
chart.axis('value', {
  label: null,
  title: {
    offset: 30,
    style: {
      fontWeight: 800,
      fontSize: 20
    }
  },
  grid: null
})
chart.legend({
  position: 'right'
})
chart.coordinate('rect').transpose()
chart
  .interval()
  .position('name*value')
  .color('district', [
    '#FF4500',
    '#1AAF8B',
    '#406C85',
    '#F6BD16',
    '#B40F0F',
    '#2FB8FC',
    '#4435FF',
    '#FF5CA2',
    '#BBE800',
    '#FE8A26',
    '#946DFF',
    '#6C3E00',
    '#6193FF',
    '#FF988E',
    '#36BCCB',
    '#004988',
    '#FFCF9D',
    '#CCDC8A',
    '#8D00A1',
    '#1CC25E'
  ])
  .size(26)
  .label('value', {
    style: {
      fill: '#8d8d8d'
    },
    offset: 10,
    content: (originData) => {
      return (originData.value + '').replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
  })

chart.interaction('element-active')
chart.interaction('plot-mousewheel-scroll', {
  start: [
    {
      trigger: 'plot:mousewheel',
      action: 'mousewheel-scroll:scroll',
      arg: { wheelDelta: 5 }
    }
  ]
})
chart.option('scrollbar', {
  // 滚动条类型： 'horizontal' / 'vertical'
  type: 'vertical'
})
chart.render()

function renderLine(allData) {
  const data = allData.map((it) => ({
    name: it.title,
    value: parseFloat(it.show_price),
    district: it.district
  }))
  const chart = new G2.Chart({
    container: 'line-container',
    autoFit: true,
    height: 800,
    padding: [20, 100, 80, 120]
  })

  chart.data(data)
  chart.scale({})

  chart.tooltip({
    showCrosshairs: true,
    shared: true
  })

  chart.axis('value', {
    label: {
      formatter: (val) => {
        return val + '元'
      }
    }
  })

  chart.line().position('name*value').color('district').shape('smooth')

  chart.point().position('name*value').color('district').shape('circle')

  chart.render()
}

renderLine(allData)
