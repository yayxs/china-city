# mermaid

- 项目构建，依赖 `vitepress` `vue` `ts`
- 文档 使用`md` 语法
- 写文章的思路使用 `mermaid`

### Use

```sh
pnpm i vitepress-plugin-mermaid mermaid -D
```

```json

 "dependencies": {
    "vitepress": "1.0.0-alpha.29",
    "vue": "^3.2.45"
  },
  "devDependencies": {
    "mermaid": "^9.2.2",
    "vitepress-plugin-mermaid": "^2.0.8"
  }
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
