<template>
  <div class="container">
    <h1 :class="{ active: isActive }" :style="{ fontSize: validFontSize + 'px' }">Văn bản có thể thay đổi</h1>
    <button class="btn btn-secondary mb-3" @click="isActive = !isActive">Bật/Tắt màu chữ</button>
    <div class="mb-2" style="max-width: 300px">
      <label class="form-label">Chọn kích thước chữ (10 - 50px)</label>
      <input v-model.number="fontSize" type="number" class="form-control" />
    </div>
    <p v-if="!isValidSize" class="text-danger">
      Kích thước không hợp lệ! Đang giữ cỡ chữ {{ validFontSize }}px.
    </p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const isActive = ref(false)
const fontSize = ref(16)
const validFontSize = ref(16)

const isValidSize = computed(() => fontSize.value >= 10 && fontSize.value <= 50)

watch(fontSize, () => {
  if (isValidSize.value) {
    validFontSize.value = fontSize.value
  }
})
</script>

<style scoped>
.active {
  color: red;
}
</style>
