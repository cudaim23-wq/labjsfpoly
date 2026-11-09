<template>
  <div class="row g-3">
    <div v-for="product in products" :key="product.id" class="col-md-4">
      <div class="card h-100">
        <img :src="product.imageUrl" class="card-img-top" alt="product image" />
        <div class="card-body">
          <span class="badge mb-2" :class="product.inStock ? 'bg-success' : 'bg-danger'">
            {{ product.inStock ? 'Còn hàng' : 'Hết hàng' }}
          </span>

          <p v-if="!product.inStock" class="alert alert-danger py-2">Sản phẩm đã hết hàng</p>

          <div v-show="product.inStock">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text mb-1">Giá: {{ product.price.toLocaleString('vi-VN') }} VND</p>
            <p class="card-text mb-1">Số lượng: {{ product.quantity }}</p>
            <p class="card-text">Danh mục: {{ product.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const products = reactive([
  {
    id: 1,
    name: 'Sản phẩm A',
    price: 100000,
    quantity: 5,
    category: 'Điện tử',
    inStock: true,
    imageUrl: 'https://picsum.photos/id/1/300/200',
  },
  {
    id: 2,
    name: 'Sản phẩm B',
    price: 250000,
    quantity: 0,
    category: 'Gia dụng',
    inStock: false,
    imageUrl: 'https://picsum.photos/id/2/300/200',
  },
])
</script>
