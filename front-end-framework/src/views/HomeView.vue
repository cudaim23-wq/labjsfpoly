<template>
  <div>
    <h1 class="mb-4">Front End Framework - Vue.js</h1>
    <div class="row g-3">
      <div v-for="lab in labs" :key="lab.path" class="col-md-4">
        <router-link :to="lab.path" class="card h-100 text-decoration-none text-reset shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ lab.name }}</h5>
            <p class="card-text text-muted mb-0">{{ lab.desc }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <p class="text-muted small mt-4 mb-0">
      Lab 6 và Lab 7 cần API giả: mở thêm một terminal và chạy <code>npm run server</code>.
    </p>
  </div>
</template>

<script setup>
const labs = [
  { path: '/lab-1', name: 'Lab 1', desc: 'Chương trình Vue đầu tiên, nội suy, v-bind, v-on, Bootstrap' },
  { path: '/lab-2', name: 'Lab 2', desc: 'ref(), reactive(), one-way/two-way, class & style binding' },
  { path: '/lab-3', name: 'Lab 3', desc: 'v-if, v-show, v-else-if, v-for với object và destructuring' },
  { path: '/lab-4', name: 'Lab 4', desc: 'Event handling, form binding: thêm, sửa, xóa sách' },
  { path: '/lab-5', name: 'Lab 5', desc: 'Component: props, emit, slots, scoped slots, provide/inject' },
  { path: '/lab-6', name: 'Lab 6', desc: 'Lifecycle hooks và gọi API bằng Axios' },
  { path: '/lab-7', name: 'Lab 7', desc: 'Vue Router, dynamic route, đăng nhập token, navigation guard' },
]
</script>
