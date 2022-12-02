import path from 'path'
import { defineConfig } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
const options = {}
const pathSrc = path.resolve(__dirname, 'src')
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${pathSrc}/`
    }
  },
  plugins: [
    SearchPlugin(options)
    // Components({
    //   resolvers: [AntDesignVueResolver()]
    // })
  ]
})
