import { defineConfig } from 'vitepress'
const TITLE = '视野中国'
const DESC = '程序员视野看中国'
const generateSideBar = () => {
  return [
    {
      text: 'About / 关于',
      collapsible: true,
      items: [
        { text: 'What is china-city', link: '/guide/what-is-cc' },
        { text: 'The author says', link: '/guide/the-author-says' },
        { text: 'One-sided view', link: '/guide/one-sided-view' },
      ],
    },
    {
      text: 'Outline / 大纲',
      collapsible: true,
      items: [{ text: 'Priority', link: '/guide/priority' }],
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
        { text: '中指快评', link: '/guide/fangjia-zz' },
        { text: '专有名词', link: '/guide/proper-noun' },
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
