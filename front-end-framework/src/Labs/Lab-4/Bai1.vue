<template>
  <div class="container">
    <h2>Thêm sách mới vào thư viện</h2>
    <form @submit.prevent="addBook">
      <div class="mb-3">
        <label for="l4b1Title" class="form-label">Tiêu đề</label>
        <input
          id="l4b1Title"
          type="text"
          :value="bookTitle"
          @input="bookTitle = $event.target.value"
          class="form-control"
          placeholder="Nhập tiêu đề"
        />
      </div>
      <div class="mb-3">
        <label for="l4b1Author" class="form-label">Tác giả</label>
        <input
          id="l4b1Author"
          type="text"
          :value="bookAuthor"
          @input="bookAuthor = $event.target.value"
          class="form-control"
          placeholder="Nhập tác giả"
        />
      </div>
      <div class="mb-3">
        <label for="l4b1Category" class="form-label">Thể loại</label>
        <select
          id="l4b1Category"
          :value="bookCategory"
          @change="bookCategory = $event.target.value"
          class="form-select"
        >
          <option value="" disabled>Chọn thể loại</option>
          <option v-for="(ten, ma) in categories" :key="ma" :value="ma">{{ ten }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Thêm sách</button>
    </form>

    <div v-if="books.length" class="mt-4">
      <h3>Danh sách sách</h3>
      <ul class="list-group">
        <li v-for="book in books" :key="book.id" class="list-group-item">
          <h5>{{ book.title }}</h5>
          <p class="mb-1">Mã: {{ book.id }}</p>
          <p class="mb-1">Tác giả: {{ book.author }}</p>
          <p class="mb-1">Thể loại: {{ book.category }}</p>
          <p class="mb-0">Số lượng: {{ book.quantity }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bookTitle = ref('')
const bookAuthor = ref('')
const bookCategory = ref('')
const bookQuantity = ref(1)
const books = ref([])

const categories = {
  1: 'Tiểu thuyết',
  2: 'Phi hư cấu',
  3: 'Khoa học',
  4: 'Lịch sử',
  5: 'Phát triển bản thân',
}

const addBook = () => {
  if (!bookTitle.value || !bookAuthor.value || !bookCategory.value || !bookQuantity.value) {
    alert('Vui lòng nhập đầy đủ thông tin sách')
    return
  }

  books.value.push({
    id: Date.now(),
    title: bookTitle.value,
    author: bookAuthor.value,
    category: categories[bookCategory.value],
    quantity: bookQuantity.value,
  })

  bookTitle.value = ''
  bookAuthor.value = ''
  bookCategory.value = ''
  bookQuantity.value = 1
}
</script>
