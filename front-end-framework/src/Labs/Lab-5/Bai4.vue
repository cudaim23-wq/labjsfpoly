<template>
  <div :class="['theme-box', theme]">
    <button class="btn btn-sm mb-3" :class="theme === 'dark-theme' ? 'btn-light' : 'btn-dark'" @click="toggleTheme">
      Đổi chủ đề
    </button>
    <slot :theme="theme"></slot>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

const theme = ref('dark-theme')

const toggleTheme = () => {
  theme.value = theme.value === 'dark-theme' ? 'light-theme' : 'dark-theme'
}

provide('theme', theme)
</script>

<style>
.theme-box {
  padding: 20px;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
}
.dark-theme {
  background: #1f2937;
  color: #f9fafb;
}
.light-theme {
  background: #f3f4f6;
  color: #111827;
}
</style>
