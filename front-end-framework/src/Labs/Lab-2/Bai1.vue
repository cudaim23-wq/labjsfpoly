<template>
  <div class="container">
    <h1>Quản lý giỏ hàng với ref()</h1>
    <p class="fs-5">Số lượng sản phẩm: <strong>{{ productCount }}</strong></p>
    <button class="btn btn-success me-2" @click="increaseCount">Tăng</button>
    <button class="btn btn-danger" @click="decreaseCount" :disabled="productCount === 0">Giảm</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productCount = ref(0)

const increaseCount = () => {
  productCount.value++
}

const decreaseCount = () => {
  if (productCount.value > 0) {
    productCount.value--
  }
}
</script>
