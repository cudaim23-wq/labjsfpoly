<template>
  <div class="row g-3">
    <div v-for="product in products" :key="product.id" class="col-md-4">
      <div class="card h-100">
        <img :src="product.imageUrl" class="card-img-top" alt="product image" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }} - {{ product.category }}</h5>
          <p v-if="product.quantity > 10" class="text-success fw-bold">Số lượng lớn</p>
          <p v-else-if="product.quantity > 0" class="text-warning fw-bold">Số lượng vừa phải</p>
          <p v-else class="text-danger fw-bold">Hết hàng</p>
          <p class="mb-1">Số lượng: {{ product.quantity }}</p>
          <p class="mb-0">Giá: {{ product.price.toLocaleString('vi-VN') }} VND</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const products = reactive([
  { id: 1, name: 'Sản phẩm A', price: 100000, quantity: 25, category: 'Điện tử', imageUrl: 'https://picsum.photos/id/1/300/200' },
  { id: 2, name: 'Sản phẩm B', price: 250000, quantity: 5, category: 'Gia dụng', imageUrl: 'https://picsum.photos/id/2/300/200' },
  { id: 3, name: 'Sản phẩm C', price: 90000, quantity: 0, category: 'Thời trang', imageUrl: 'https://picsum.photos/id/3/300/200' },
])
</script>
