<template>
  <p class="mb-3">
    Component con lấy chủ đề bằng inject: <span class="badge bg-info text-dark">{{ theme }}</span>
  </p>
</template>

<script setup>
import { inject } from 'vue'

const theme = inject('theme', 'light-theme')
</script>
