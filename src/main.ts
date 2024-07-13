import { ViteSSG} from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
export const createApp = ViteSSG(App,{ routes})