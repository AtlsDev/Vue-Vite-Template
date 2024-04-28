<script setup lang="ts">
// import primeAuraDarkPurple from 'primevue/resources/themes/aura-dark-purple/theme.css'
// import primeAuraLightPurple from 'primevue/resources/themes/aura-dark-purple/theme.css'

useHead({
  title: 'Temp',
  meta: [
    {
      name: 'description',
      content: 'Opinionated Vite Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      // href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <div class="h-4rem">
    <TheHeader />
  </div>
  <div>
    <RouterView />
  </div>
  <div class="h-4rem">
    <TheFooter />
  </div>
</template>
