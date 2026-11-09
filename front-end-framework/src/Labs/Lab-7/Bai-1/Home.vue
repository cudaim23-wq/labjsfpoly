<template>
  <div class="container">
    <h1>Trang chủ</h1>
    <p>Chào mừng bạn đến với trang chủ của ứng dụng!</p>

    <h4 class="mt-4">Sản phẩm (bấm để xem chi tiết)</h4>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div class="list-group" style="max-width: 400px">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/lab-7/product/${product.id}`"
        class="list-group-item list-group-item-action d-flex justify-content-between"
      >
        <span>{{ product.name }}</span>
        <span class="text-muted">{{ product.price.toLocaleString('vi-VN') }} VND</span>
      </router-link>
      <router-link to="/lab-7/product/999" class="list-group-item list-group-item-action text-danger">
        Sản phẩm không tồn tại (id 999)
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { API_URL } from '@/api'

const products = ref([])
const error = ref('')

onMounted(async () => {
  try {
    const response = await axios.get(`${API_URL}/products`)
    products.value = response.data
  } catch {
    error.value = 'Không tải được sản phẩm. Hãy chạy "npm run server" trước.'
  }
})
</script>
