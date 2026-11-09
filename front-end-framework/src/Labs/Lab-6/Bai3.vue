<template>
  <div>
    <button class="btn btn-primary mb-3" @click="fetchData" :disabled="loading">Tải người dùng</button>
    <div v-if="loading" class="alert alert-info">Đang tải dữ liệu...</div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div class="row">
      <div v-for="user in users" :key="user.id" class="col-md-4 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
            <p class="card-text mb-0">
              Địa chỉ:
              {{ user.address ? `${user.address.street}, ${user.address.city}` : 'Chưa cập nhật' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onUpdated, ref } from 'vue'
import axios from 'axios'
import { API_URL } from '@/api'

const users = ref([])
const loading = ref(false)
const error = ref('')

const fetchData = async () => {
  loading.value = true
  error.value = ''
  try {
    const response = await axios.get(`${API_URL}/users`)
    users.value = response.data
  } catch {
    error.value = 'Không tải được người dùng. Hãy chạy "npm run server" trước.'
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
