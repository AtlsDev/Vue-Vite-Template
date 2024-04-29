import { ViteSSG } from 'vite-ssg'
import AnimateOnScroll from 'primevue/animateonscroll'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import type { UserModule } from './types'

// import '@unocss/reset/tailwind.css'
import './assets/styles/main.css'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.directive('animateonscroll', AnimateOnScroll)
    // ctx.app.use(Previewer)
    // if (isDark.value)
    // import('primevue/resources/themes/aura-dark-purple/theme.css')
    // else
    //   import('primevue/resources/themes/aura-light-purple/theme.css')
  },

)
