<template>
  <div class="container" style="max-width: 420px">
    <h2>Đăng nhập</h2>
    <p class="text-muted small">Tài khoản mẫu: admin@gmail.com / 123456</p>
    <form @submit.prevent="login">
      <div class="mb-3">
        <input v-model.trim="username" placeholder="Tên đăng nhập" class="form-control" />
      </div>
      <div class="mb-3">
        <input type="email" v-model.trim="email" placeholder="Email" class="form-control" required />
      </div>
      <div class="mb-3">
        <input type="password" v-model="password" placeholder="Mật khẩu" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary w-100" :disabled="loading">
        {{ loading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
      </button>
    </form>
    <p v-if="error" class="text-danger mt-3">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { API_URL } from '@/api'
import { setAuth } from './auth'

const username = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()
const route = useRoute()

const login = async () => {
  error.value = ''
  loading.value = true
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username: username.value,
      email: email.value,
      password: password.value,
    })
    setAuth(response.data.accessToken, response.data.user)
    router.push(route.query.redirect || '/lab-7/dashboard')
  } catch {
    error.value = 'Đăng nhập không thành công'
  } finally {
    loading.value = false
  }
}
</script>
