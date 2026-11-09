<template>
  <div>
    <div class="alert" :class="statusClass">
      Trạng thái: <strong>{{ isOnline ? 'Online' : 'Offline' }}</strong>
    </div>
    <p class="text-muted small mb-0">
      Thử tắt Wi-Fi (hoặc DevTools &gt; Network &gt; Offline) để thấy trạng thái đổi ngay.
    </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isOnline = ref(true)
const statusClass = ref('alert-success')

const updateStatus = () => {
  isOnline.value = navigator.onLine
  statusClass.value = isOnline.value ? 'alert-success' : 'alert-danger'
}

onMounted(() => {
  window.addEventListener('online', updateStatus)
  window.addEventListener('offline', updateStatus)
  updateStatus()
})

onUnmounted(() => {
  window.removeEventListener('online', updateStatus)
  window.removeEventListener('offline', updateStatus)
})
</script>
