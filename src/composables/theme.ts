import '~/assets/styles/layout.css'

// import primeDarkTheme from 'primevue/resources/themes/aura-dark-purple/theme.css'
// import primeLightTheme from 'primevue/resources/themes/aura-light-purple/theme.css'

export const appMode = ref('v-boxed')

export const themeLinks = reactive([
  {
    rel: 'stylesheet',
    type: 'text/css',
    // href: computed(() => isDark.value ? primeDarkTheme : primeLightTheme),
  },
])
