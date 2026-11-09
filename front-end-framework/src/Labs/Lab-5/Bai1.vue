<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Tác giả: {{ author }}</h6>
      <p class="card-text mb-1">Giá: {{ price.toLocaleString('vi-VN') }} VND</p>
      <p class="card-text">Thể loại: {{ category }}</p>
      <span v-if="id" class="badge bg-secondary">Mã: {{ id }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: [String, Number],
  title: { type: String, required: true },
  author: { type: String, default: 'Chưa rõ' },
  price: { type: Number, default: 0 },
  category: { type: String, default: 'Khác' },
})
</script>
