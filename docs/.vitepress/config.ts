import { defineConfig } from 'vitepress'
import { TITLE, DESC } from '../config'

const generateSideBar = () => {
  return [
    {
      text: '关于',
      collapsible: true,
      items: [
        {
          text: '这个项目',
          textEN: 'What is china-city',
          link: '/guide/what-is-cc'
        },
        {
          text: '作者想对你说',
          textEN: 'The author says',
          link: '/guide/the-author-says'
        },
        {
          text: '一些片面看法',
          textEN: 'One-sided view',
          link: '/guide/one-sided-view'
        }
      ]
    },
    {
      text: '前置知识',
      textEN: 'Outline / 大纲',
      collapsible: true,
      items: [
        { text: '首先了解中国所有的省份', link: '/guide/province' },
        { text: '其次知道省份下的所有城市', link: '/guide/province-city' },
        { text: '接着选择一个适合你的城市', link: '/guide/how-to-choose' },
        { text: '怎么知道适不适合你', link: '/guide/priority' }
      ]
    },

    {
      text: '选择城市看什么',
      collapsible: true,
      items: [
        { text: '房价', link: '/guide/fangjia' },
        { text: '行业和职业', link: '/guide/hangye' }
      ]
    },
    {
      text: '政策发展规划',
      collapsible: true,
      items: [
        { text: '该看哪些政策文件', link: '/guide/zhengce-say' },
        { text: '中国和各个省份及主要城市十四五原文', link: '/guide/145s' },
        { text: '中国十四五与2035远景目标', link: '/guide/145-china' }
      ]
    },
    {
      text: 'Quote / 引用',
      collapsible: true,
      items: [
        { text: '二十大中的房地产', link: '/guide/fangjia-zz' },
        { text: '重点专有名词解析', link: '/guide/proper-noun' }
      ]
    },
    {
      text: 'Other',
      collapsible: true,
      items: [
        {
          text: '买房日志',
          link: '/guide/buying-a-house-log'
        }
      ]
    },
    {
      text: 'Update',
      collapsible: true,
      items: [
        {
          text: '0.x and 1.x',
          link: '/guide/update-doc'
        }
      ]
    }
  ]
}

// /**
//  * @type {import('vitepress').UserConfig}
//  */
// const config = {
//   title: TITLE,
//   description: DESC,
//   themeConfig: {
//     sidebar: generateSideBar(),
//   },
// }

export default defineConfig({
  title: TITLE,
  description: DESC,
  lastUpdated: true,
  themeConfig: {
    sidebar: generateSideBar()
  }
})
