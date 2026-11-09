<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light rounded mb-4 px-3">
      <router-link to="/lab-7" class="navbar-brand">Lab 7</router-link>
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><router-link to="/lab-7" class="nav-link" exact-active-class="active">Home</router-link></li>
        <li class="nav-item"><router-link to="/lab-7/about" class="nav-link" active-class="active">About</router-link></li>
        <li class="nav-item">
          <router-link to="/lab-7/dashboard" class="nav-link" active-class="active">Dashboard</router-link>
        </li>
      </ul>
      <span v-if="currentUser" class="navbar-text me-3">Xin chào, {{ currentUser.name || currentUser.email }}</span>
      <button v-if="token" class="btn btn-sm btn-outline-danger" @click="logout">Đăng xuất</button>
      <router-link v-else to="/lab-7/login" class="btn btn-sm btn-primary">Đăng nhập</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { clearAuth, currentUser, token } from './auth'

const router = useRouter()

const logout = () => {
  clearAuth()
  router.push('/lab-7/login')
}
</script>
