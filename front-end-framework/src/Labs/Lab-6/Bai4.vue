<template>
  <div class="user-dashboard">
    <h3>Thêm người dùng</h3>
    <form @submit.prevent="addUser" class="row g-2 align-items-end mb-3">
      <div class="col-md-3">
        <label class="form-label" for="l6Name">Tên</label>
        <input id="l6Name" v-model.trim="newUser.name" type="text" class="form-control" required />
      </div>
      <div class="col-md-4">
        <label class="form-label" for="l6Email">Email</label>
        <input id="l6Email" v-model.trim="newUser.email" type="email" class="form-control" required />
      </div>
      <div class="col-md-3">
        <label class="form-label" for="l6Password">Mật khẩu (từ 4 ký tự)</label>
        <input
          id="l6Password"
          v-model="newUser.password"
          type="password"
          minlength="4"
          class="form-control"
          required
        />
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary w-100" :disabled="saving">Thêm người dùng</button>
      </div>
    </form>

    <div v-if="message" class="alert" :class="messageType">{{ message }}</div>

    <h4>Danh sách người dùng ({{ users.length }})</h4>
    <ul class="list-group">
      <li v-for="user in users" :key="user.id" class="list-group-item">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import axios from 'axios'
import { API_URL } from '@/api'

const users = ref([])
const newUser = ref({ name: '', email: '', password: '' })
const saving = ref(false)
const message = ref('')
const messageType = ref('alert-success')

const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`)
    users.value = response.data
  } catch (error) {
    console.error('Có lỗi khi lấy danh sách người dùng:', error)
    message.value = 'Không tải được danh sách người dùng. Hãy chạy "npm run server" trước.'
    messageType.value = 'alert-danger'
  }
}

const addUser = async () => {
  saving.value = true
  try {
    const response = await axios.post(`${API_URL}/signup`, newUser.value)
    users.value.push(response.data.user)
    message.value = `Đã thêm người dùng ${response.data.user.name}`
    messageType.value = 'alert-success'
    newUser.value = { name: '', email: '', password: '' }
  } catch (error) {
    console.error('Có lỗi khi thêm người dùng:', error)
    message.value = error.response?.data || 'Không thêm được người dùng'
    messageType.value = 'alert-danger'
  } finally {
    saving.value = false
  }
}

onMounted(() => {
  fetchUsers()
})

onUpdated(() => {
  console.log(`Danh sách hiện có ${users.value.length} người dùng`)
})
</script>
