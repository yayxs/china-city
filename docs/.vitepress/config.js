import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
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
        { text: '打开地图', link: '/guide/map' },
        { text: '首先了解中国所有的省份', link: '/guide/province' },
        { text: '其次知道省份下的所有城市', link: '/guide/province-city' },
        { text: '接着选择一个适合你的城市', link: '/guide/how-to-choose' },
        { text: '怎么知道适不适合你', link: '/guide/match' }
      ]
    },

    {
      text: '选择城市看什么',
      collapsible: true,
      items: [
        { text: '房价', link: '/guide/fangjia' },
        { text: '行业 职业 就业', link: '/guide/hangye' },
        { text: '营销 获得百姓心智', link: '/guide/marketing' }
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
      text: '新型城镇化',
      collapsible: true,
      items: [{ text: '新一代城镇化是什么', link: '/guide/what-is-czh' }]
    },
    {
      text: '城市专题 洞察每个城市',
      collapsible: true,
      items: [
        {
          text: '长沙',
          link: '/cities/changsha'
        },
        {
          text: '武汉',
          link: '/cities/wuhan'
        },
        {
          text: '西安',
          link: '/cities/xian'
        }
      ]
    },
    {
      text: '文献资料引用',
      collapsible: true,
      items: [{ text: '二十大中的房地产', link: '/guide/fangjia-zz' }]
    },
    {
      text: '其他',
      collapsible: true,
      items: [
        { text: '重点名词解析', link: '/guide/proper-noun' },
        { text: '始终保持学习心态', link: '/guide/keep-learning' },
        {
          text: '作者买房日志与心得',
          link: '/guide/buying-a-house-log'
        }
      ]
    },
    {
      text: '致谢',
      collapsible: true,
      items: [
        {
          text: '感谢技术',
          link: '/thanks/technology'
        }
      ]
    },
    {
      text: '更新迁移日志',
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

// export default defineConfig({
//   title: TITLE,
//   description: DESC,
//   lastUpdated: true,
//   themeConfig: {
//     sidebar: generateSideBar()
//   }
// })

export default withMermaid(
  defineConfig({
    title: TITLE,
    description: DESC,
    lastUpdated: true,
    themeConfig: {
      sidebar: generateSideBar()
    },
    mermaid: {
      // refer https://mermaid-js.github.io/mermaid/#/Setup for options
    }
  })
)
