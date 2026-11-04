<template>
  <!-- Hiển thị lời chào -->
  <h1>{{ greeting }}</h1>
  <!-- Tạo nút thay đổi nội dung -->
  <button class="btn btn-primary" :title="buttonTitle" @click="changeGreeting">
    Click để thay đổi
  </button>
</template>

<script setup>
import { ref } from 'vue'

// Khai báo biến reactive
const greeting = ref('Xin chào bạn!')
const buttonTitle = ref('Nhấn để thay đổi lời chào')

// Khai báo hàm thay đổi lời chào
const changeGreeting = () => {
  greeting.value = 'Hello, World!'
  buttonTitle.value = 'Lời chào mới đã được cập nhật'
}
</script>
