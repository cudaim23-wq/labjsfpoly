<template>
  <div class="container">
    <h1>Quản lý thông tin người dùng với reactive()</h1>
    <form class="row g-3" @submit.prevent="submitForm" novalidate>
      <div class="col-md-4">
        <label class="form-label">Tên</label>
        <input v-model.trim="form.name" class="form-control" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Tuổi</label>
        <input v-model.number="form.age" type="number" class="form-control" />
      </div>
      <div class="col-md-4">
        <label class="form-label">Email</label>
        <input v-model.trim="form.email" class="form-control" />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Cập nhật</button>
      </div>
    </form>

    <ul v-if="errors.length" class="alert alert-danger mt-3 mb-0">
      <li v-for="loi in errors" :key="loi">{{ loi }}</li>
    </ul>
    <p v-if="success" class="alert alert-success mt-3 mb-0">Cập nhật thông tin thành công!</p>

    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Thông tin hiện tại</h5>
        <p class="mb-1">Tên: {{ user.name || '(chưa có)' }}</p>
        <p class="mb-1">Tuổi: {{ user.age ?? '(chưa có)' }}</p>
        <p class="mb-0">Email: {{ user.email || '(chưa có)' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const user = reactive({ name: '', age: null, email: '' })
const form = reactive({ name: '', age: null, email: '' })
const errors = ref([])
const success = ref(false)

const submitForm = () => {
  const loi = []
  if (!form.name) loi.push('Vui lòng nhập tên')
  if (!Number.isInteger(form.age) || form.age <= 0 || form.age > 120) loi.push('Tuổi phải là số nguyên từ 1 đến 120')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) loi.push('Email không hợp lệ')

  errors.value = loi
  success.value = loi.length === 0
  if (success.value) {
    Object.assign(user, form)
  }
}
</script>
