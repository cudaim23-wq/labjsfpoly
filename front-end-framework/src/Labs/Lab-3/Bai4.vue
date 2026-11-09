<template>
  <div class="container">
    <h2>Quản lý sản phẩm</h2>

    <div class="mb-3" style="max-width: 300px">
      <label for="categoryFilter" class="form-label">Lọc theo danh mục</label>
      <select v-model="selectedCategory" class="form-select" id="categoryFilter">
        <option value="">Tất cả</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>

    <div class="alert alert-info">
      Tổng giá trị hàng tồn kho: <strong>{{ totalStockValue.toLocaleString('vi-VN') }} VND</strong>
    </div>

    <div class="row g-3">
      <template v-for="product in filteredProducts" :key="product.id">
        <div class="col-md-4">
          <div class="card h-100">
            <img :src="product.imageUrl" class="card-img-top" alt="Product Image" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }} - {{ product.category }}</h5>
              <p v-if="product.inStock" class="text-success fw-bold">Còn hàng</p>
              <p v-else class="text-danger fw-bold">Hết hàng</p>

              <ul class="list-unstyled small mb-0">
                <template v-for="(value, key) in product" :key="key">
                  <li v-if="key !== 'imageUrl'">
                    <strong>{{ labels[key] ?? key }}:</strong> {{ hienThi(key, value) }}
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const selectedCategory = ref('')

const products = reactive([
  { id: 1, name: 'Laptop', price: 15000000, quantity: 5, category: 'Electronics', inStock: true, description: 'Laptop thế hệ mới', imageUrl: 'https://picsum.photos/id/1/300/200' },
  { id: 2, name: 'Phone', price: 8000000, quantity: 12, category: 'Electronics', inStock: true, description: 'Điện thoại thông minh', imageUrl: 'https://picsum.photos/id/2/300/200' },
  { id: 3, name: 'Headphone', price: 2000000, quantity: 0, category: 'Accessories', inStock: false, description: 'Tai nghe chất lượng cao', imageUrl: 'https://picsum.photos/id/3/300/200' },
])

const labels = {
  id: 'Mã',
  name: 'Tên',
  price: 'Giá',
  quantity: 'Số lượng',
  category: 'Danh mục',
  inStock: 'Còn hàng',
  description: 'Mô tả',
}

const hienThi = (key, value) => {
  if (key === 'price') return `${value.toLocaleString('vi-VN')} VND`
  if (key === 'inStock') return value ? 'Có' : 'Không'
  return value
}

const totalStockValue = computed(() =>
  products.reduce((total, product) => (product.inStock ? total + product.price * product.quantity : total), 0),
)

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products
  return products.filter((product) => product.category === selectedCategory.value)
})
</script>
