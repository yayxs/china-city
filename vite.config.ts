import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'

export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: 'pages',
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
      script: {
        defineModel: true,
      },
    }),
    Markdown({}),
  ],
})
