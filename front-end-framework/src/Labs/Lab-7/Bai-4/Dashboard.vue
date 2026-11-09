<template>
  <div class="container">
    <h2>Trang Dashboard</h2>
    <p>Chào mừng đến với trang Dashboard!</p>
    <div v-if="currentUser" class="card" style="max-width: 420px">
      <div class="card-body">
        <h5 class="card-title">{{ currentUser.name || currentUser.email }}</h5>
        <p class="card-text mb-1">Email: {{ currentUser.email }}</p>
        <p class="card-text text-muted small text-break">Token: {{ token }}</p>
        <button class="btn btn-outline-danger" @click="logout">Đăng xuất</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { clearAuth, currentUser, token } from '../auth'

const router = useRouter()

const logout = () => {
  clearAuth()
  router.push('/lab-7/login')
}
</script>
