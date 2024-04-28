<script setup lang="ts">
// const adminStore = useAdminStore()
// const name = ref(adminStore.savedName)

// const router = useRouter()
// function go() {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

// const { t } = useI18n()
</script>

<template>
  <div class="justify-content-center align-items-center h-full flex gap-2">
    <div
      v-ripple="{
        pt: {
          root: { style: 'background: rgba(75, 175, 80, 0.3)' },
        },
      }"
      class="p-ripple box cursor-pointer"
      style="border: 1px solid rgba(75, 175, 80, 0.3)"
    >
      Green
    </div>
    <div
      v-ripple="{
        pt: {
          root: { style: 'background: rgba(255, 193, 6, 0.3)' },
        },
      }"
      class="p-ripple box cursor-pointer"
      style="border: 1px solid rgba(255, 193, 6, 0.3)"
    >
      Orange
    </div>
    <div
      v-ripple="{
        pt: {
          root: { style: 'background: rgba(156, 39, 176, 0.3)' },
        },
      }"
      class="p-ripple box cursor-pointer"
      style="border: 1px solid rgba(156, 39, 176, 0.3)"
    >
      Purple
    </div>
  </div>
</template>

<style scoped>
.box {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  width: 110px;
  text-align: center;
}
</style>

<route lang="yaml">
  meta:
    layout: home
  </route>
