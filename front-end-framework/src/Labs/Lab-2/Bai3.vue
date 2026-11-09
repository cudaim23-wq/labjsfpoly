<template>
  <div class="container">
    <h1>One-way và Two-way Binding</h1>
    <div class="mb-3">
      <label class="form-label">One-way binding (chỉ hiển thị, không sửa được)</label>
      <input :value="message" class="form-control" readonly />
    </div>
    <div class="mb-3">
      <label class="form-label">Two-way binding (gõ để thay đổi)</label>
      <input v-model="message" class="form-control" />
    </div>
    <p>Giá trị hiện tại: <strong>{{ message }}</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Xin chào!')
</script>
