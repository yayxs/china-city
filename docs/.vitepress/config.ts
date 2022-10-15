import { defineConfig } from 'vitepress'
const TITLE = '视野中国'
const DESC = '程序员视野看中国'
const generateSideBar = () => {
  return [
    {
      text: 'About',
      collapsible: true,
      items: [
        { text: 'What is china-city', link: '/guide/what-is-cc' },
        { text: 'The author says', link: '/guide/the-author-says' },
        { text: 'One-sided view', link: '/guide/one-sided-view' },
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
