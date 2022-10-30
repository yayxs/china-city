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
          link: '/guide/what-is-cc',
        },
        {
          text: '作者想对你说',
          textEN: 'The author says',
          link: '/guide/the-author-says',
        },
        {
          text: '一些片面看法',
          textEN: 'One-sided view',
          link: '/guide/one-sided-view',
        },
      ],
    },
    {
      text: '前置知识',
      textEN: 'Outline / 大纲',
      collapsible: true,
      items: [
        { text: '中国所有的省份', link: '/guide/province' },
        { text: '省份下的城市', link: '/guide/province-city' },

        { text: '看问题的优先级', link: '/guide/priority' },
      ],
    },

    {
      text: 'Point of view / 视角',
      collapsible: true,
      items: [{ text: '房价', link: '/guide/fangjia' }],
    },
    {
      text: 'Quote / 引用',
      collapsible: true,
      items: [
        { text: '二十大中的房地产', link: '/guide/fangjia-zz' },
        { text: '重点专有名词解析', link: '/guide/proper-noun' },
      ],
    },
    {
      text: 'Other',
      collapsible: true,
      items: [
        {
          text: '买房日志',
          link: '/guide/buying-a-house-log',
        },
      ],
    },
    {
      text: 'Update',
      collapsible: true,
      items: [
        {
          text: '0.x and 1.x',
          link: '/guide/update-doc',
        },
      ],
    },
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
    sidebar: generateSideBar(),
  },
})
