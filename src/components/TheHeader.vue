<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const router = useRouter()
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    },
  },
  {
    label: 'Projects',
    icon: 'pi pi-lightbulb',
    command: () => {
      router.push('/projects')
    },
  },
  {
    label: 'About',
    icon: 'pi pi-paperclip',
    command: () => {
      router.push('/about')
    },
  },
  {
    icon: () => `pi pi-${isDark.value ? 'sun' : 'moon'}`,
    command: () => {
      toggleDark()
    },
  },
])
</script>

<template>
  <div m-3 flex justify-center>
    <div
      fixed
      class="w-11/12"
    >
      <Menubar class="w-full flex justify-between" :model="items">
        <template #start>
          <div
            flex cursor-pointer gap-1 @click="router.push('/')"
          >
            <div class="text-red">
              {{ "COMPANY" }}
            </div>
            <div>
              {{ "NAME" }}
            </div>
          </div>
        </template>
      </Menubar>
    </div>
  </div>
</template>
