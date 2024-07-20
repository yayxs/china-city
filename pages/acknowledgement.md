# 致谢 Acknowledgement

## 有关 mermaid

- 项目构建`vue` `ts`
- 文档 使用`md` 语法
- 一些思路 可以使用 `mermaid` 画图

### Use

```sh
pnpm i vitepress-plugin-mermaid mermaid -D
```

import { defineConfig } from 'vitepress'

- import { withMermaid } from 'vitepress-plugin-mermaid'

```js
export default withMermaid(
  defineConfig({
    // my config
    mermaid: {
      // refer https://mermaid-js.github.io/mermaid/#/Setup for options
    }
  })
)
```

## 感谢这些项目

- [Fast Node Manager (fnm)](https://github.com/Schniz/fnm)
  - [https://github.com/Schniz/fnm#usage-with-cmder](https://github.com/Schniz/fnm#usage-with-cmder)
- [pnpm](https://github.com/pnpm/pnpm)
- [https://github.com/web-infra-dev/rspress](https://github.com/web-infra-dev/rspress)
