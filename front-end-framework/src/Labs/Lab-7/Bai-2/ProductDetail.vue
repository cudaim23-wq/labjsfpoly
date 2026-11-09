<template>
  <div class="container">
    <h2>Chi tiết sản phẩm</h2>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-else-if="product" class="row g-4">
      <div class="col-md-5">
        <img :src="product.imageUrl" :alt="product.name" class="img-fluid rounded" />
      </div>
      <div class="col-md-7">
        <h3>{{ product.name }}</h3>
        <p>Giá: {{ product.price.toLocaleString('vi-VN') }} VND</p>
        <p>Mô tả: {{ product.description }}</p>
        <p>Thể loại: {{ product.category }}</p>
        <p>Số lượng: {{ product.quantity }}</p>
      </div>
    </div>
    <div v-else>
      <p>Đang tải dữ liệu sản phẩm...</p>
    </div>
    <router-link to="/lab-7" class="btn btn-outline-secondary mt-3">Quay lại trang chủ</router-link>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { API_URL } from '@/api'

const route = useRoute()
const product = ref(null)
const error = ref('')

const fetchProduct = async (id) => {
  product.value = null
  error.value = ''
  try {
    const response = await axios.get(`${API_URL}/products/${id}`)
    product.value = response.data
  } catch (err) {
    error.value =
      err.response?.status === 404
        ? `Không tìm thấy sản phẩm có id ${id}`
        : 'Không tải được sản phẩm. Hãy chạy "npm run server" trước.'
  }
}

watch(
  () => route.params.id,
  (id) => {
    if (id) fetchProduct(id)
  },
  { immediate: true },
)
</script>
