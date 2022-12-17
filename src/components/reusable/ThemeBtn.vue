<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'
import { themeStorage } from '@/utils/themeStorage'

export default defineComponent({
  name: 'ThemeBtn',
  components: { Button },
  // TODO: Add theme toggle functionality
  data() {
    return {
      isDark: false,
    }
  },

  mounted() {
    this.isDark = themeStorage.get() === 'dark'
  },

  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      themeStorage.set(this.isDark ? 'dark' : 'light')
    },
  },

  watch: {
    isDark(value) {
      if (value) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    },
  },
})
</script>

<template>
  <div class="fixed bottom-8 right-8">
    <Button
      :icon="isDark ? 'material-symbols:light-mode' : 'ri:moon-fill'"
      radius="rounded-full"
      size="lg"
      variant="neobrutalism"
      @click="toggleTheme" />
  </div>
</template>
