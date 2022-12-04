import path from 'path'
import { defineConfig } from 'vite'
import { SearchPlugin } from 'vitepress-plugin-search'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
const options = {}
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.', 'src')
    }
  },
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    SearchPlugin(options)
    // Components({
    //   resolvers: [AntDesignVueResolver()]
    // })
  ]
})
