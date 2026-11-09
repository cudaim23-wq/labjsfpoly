<template>
  <div>
    <button class="btn btn-primary mb-3" @click="fetchData" :disabled="loading">Tải bài viết</button>
    <div v-if="loading" class="alert alert-info">Đang tải dữ liệu...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <ul class="list-group">
      <li v-for="post in posts" :key="post.id" class="list-group-item">
        <h5>{{ post.title }}</h5>
        <p class="mb-0 text-muted">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated, ref } from 'vue'
import axios from 'axios'
import { API_URL } from '@/api'

const posts = ref([])
const loading = ref(false)
const error = ref('')

const fetchData = async () => {
  loading.value = true
  error.value = ''
  try {
    const response = await axios.get(`${API_URL}/posts`)
    posts.value = response.data
  } catch {
    error.value = 'Không tải được bài viết. Hãy chạy "npm run server" trước.'
  } finally {
    loading.value = false
  }
}

onBeforeUpdate(() => {
  console.log('Component sẽ cập nhật.')
})

onUpdated(() => {
  console.log('Component đã cập nhật.')
})
</script>
