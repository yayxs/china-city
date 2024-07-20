# 更新日志 Change log

## 说明

- 项目是 **2022 年初** 立项，陆陆续续整个 2022 年都在更新迭代，过程中看了很多资料，在 `2022年12月中旬` 结束了一年的开发工作
- 2023 年 4 月中旬开始继续更新
- 后边使用过 `vitepress`
- 直接使用基础的`html文件`
- 接触到了 `Monorepo` 管理仓库的方式，统一修改为这种方式。可参考 [https://pnpm.io/zh/workspaces](https://pnpm.io/zh/workspaces)

## 日志

## 文档站点选型

**核心的诉求：**

- 一个字 `快`
- 轻量
- 支持`mdx`
- 可以写一些组件
- 基于文件路由，不写配置

|                      a                       |             b             |
| :------------------------------------------: | :-----------------------: |
|  vuepress https://github.com/vuejs/vuepress  |   基于vue组件，vue生态    |
| vitepress https://github.com/vuejs/vitepress |  vite生态，得写配置文件   |
|   nextra https://github.com/shuding/nextra   | next生态 有点重，依赖next |

## 选型的历史

- 这个项目的最早一次`commit`是在 **2022 年 3 月 12 日** 这个 commit [点击这里](https://github.com/yayxs/china-city/commit/ecd34f90193def65bf43d9de1628f10cc789757c)
- 最早的话这个项目使用的是纯纯的 markdown。刚开始主要是写一些文字 ，如果项目是在`github`上写`md`，可以直接在github上看，不过有的人可能不能科学上网
- 后边的话使用过 `vitepress`。至于为啥不用这个呢，觉得还得配置比较麻烦，写东西的时候总是分心想着怎么配置
- 正是因为麻烦后来使用了一种直接预览的方式，就不想再借助一些像 vitepree 这种。后来想着直接使用`html` 文件，`github`是可以直接进行预览`html`的，直接用原生 `html`文件的方式，不再借助任何静态博客站点（使用原生的 `HTML` `CSS` `JavaScript` ）
- 再后来接触到了 `Monorepo` 管理仓库的方式，统一修改为这种方式。可参考 [https://pnpm.io/zh/workspaces](https://pnpm.io/zh/workspaces)
- 后来接触到了`astro`

<details>
  <summary>about astro</summary>
  <p>
    说一下怎么结识这个框架的。上班的时候之前看到过掘金上的文章讲这是个什么技术，当时没在意，只看了个标题
    2023年10月20号看了一会文档，觉得可以试一试。
  </p>
  <p> [astro 的 github 仓库的地址](https://github.com/withastro/astro)</p>
  <p>
    `astro` 的文档，这是链接
    [astro](https://docs.astro.build/zh-cn/core-concepts/project-structure/)
  </p>
</details>

# 更新时间

**2022 年国庆节假期过后**，整个项目基于 `VitePress` 文档化，详细的`changelog` 可以参考 `git log`

|    时间    |                           更新内容                           |   其他   |
| :--------: | :----------------------------------------------------------: | :------: |
| 2022-03-12 |                  写上一点想法 & 读读十四五                   | `V0.0.1` |
| 2022-03-14 |                       中国美女城市排行                       | `V0.0.2` |
| 2022-03-21 |                      近几年的新一线排名                      | `V0.0.3` |
| 2022-04-04 |                         城市买房资格                         | `V0.0.4` |
| 2022-04-10 |                      长沙辖区 武汉房价                       | `V0.0.5` |
| 2022-04-16 |               整理 `readme` 添加新一线历年排名               | `V0.0.6` |
| 2022-04-23 |                         完善中国省份                         | `V0.0.7` |
| 2022-04-30 |                        长沙房价可视化                        | `V0.0.8` |
| 2022-05-05 |                        中国 高中 排行                        | `V0.0.9` |
| 2022-06-19 |                         河南 十四五                          | `V1.0.0` |
| 2022-06-25 | 1、修改仓库名 `vision-china` 改为 `china-city` 2、湖南十四五 | `V1.0.1` |
| 2022-07-02 |      1、替换`gitee`图床文件 修改为 cos 2、确定目录大纲       | `V1.0.2` |
