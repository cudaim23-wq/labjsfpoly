<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Danh sách sản phẩm</h1>
    <div class="row g-4">
      <div v-for="product in products" :key="product.name" class="col-sm-4">
        <div class="card h-100">
          <img :src="product.image" :alt="product.name" class="card-img-top" />
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text fw-bold">Giá: {{ product.price.toLocaleString('vi-VN') }} VND</p>
            <button class="btn btn-success mt-auto" @click="muaNgay(product)">Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
    <p v-if="thongBao" class="alert alert-success mt-4 text-center">{{ thongBao }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Dữ liệu sản phẩm
const products = [
  {
    name: 'Sản phẩm 1',
    description: 'Mô tả sản phẩm 1, rất chất lượng và đáng mua.',
    price: 500000,
    image: 'https://picsum.photos/id/1/300/300',
  },
  {
    name: 'Sản phẩm 2',
    description: 'Mô tả sản phẩm 2, chất lượng tốt và giá phải chăng.',
    price: 300000,
    image: 'https://picsum.photos/id/2/300/300',
  },
  {
    name: 'Sản phẩm 3',
    description: 'Mô tả sản phẩm 3, sản phẩm cao cấp và nhiều tính năng.',
    price: 1000000,
    image: 'https://picsum.photos/id/3/300/300',
  },
]

const thongBao = ref('')

const muaNgay = (product) => {
  thongBao.value = `Đã thêm "${product.name}" vào giỏ hàng`
}
</script>
