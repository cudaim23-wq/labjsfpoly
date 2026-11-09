<template>
  <div class="container">
    <h2>Xóa thông tin sách</h2>
    <form @submit.prevent="addBook" class="row g-2 align-items-end">
      <div class="col-md-3">
        <label class="form-label">Tiêu đề</label>
        <input :value="bookTitle" @input="bookTitle = $event.target.value" class="form-control" />
      </div>
      <div class="col-md-3">
        <label class="form-label">Tác giả</label>
        <input :value="bookAuthor" @input="bookAuthor = $event.target.value" class="form-control" />
      </div>
      <div class="col-md-3">
        <label class="form-label">Thể loại</label>
        <select :value="bookCategory" @change="bookCategory = $event.target.value" class="form-select">
          <option value="" disabled>Chọn thể loại</option>
          <option v-for="(ten, ma) in categories" :key="ma" :value="ma">{{ ten }}</option>
        </select>
      </div>
      <div class="col-md-1">
        <label class="form-label">SL</label>
        <input
          type="number"
          min="1"
          :value="bookQuantity"
          @input="bookQuantity = Number($event.target.value)"
          class="form-control"
        />
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary w-100">Thêm sách</button>
      </div>
    </form>

    <div v-if="books.length" class="mt-4">
      <h3>Danh sách sách</h3>
      <ul class="list-group">
        <li
          v-for="book in books"
          :key="book.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5>{{ book.title }}</h5>
            <p class="mb-1">Tác giả: {{ book.author }}</p>
            <p class="mb-1">Thể loại: {{ book.category }}</p>
            <p class="mb-0">Số lượng: {{ book.quantity }}</p>
          </div>
          <button @click="deleteBook(book.id)" class="btn btn-danger">Xóa</button>
        </li>
      </ul>
    </div>
    <p v-else class="text-muted mt-4">Chưa có sách nào.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bookTitle = ref('')
const bookAuthor = ref('')
const bookCategory = ref('')
const bookQuantity = ref(1)

const categories = {
  1: 'Tiểu thuyết',
  2: 'Phi hư cấu',
  3: 'Khoa học',
  4: 'Lịch sử',
  5: 'Phát triển bản thân',
}

const books = ref([
  { id: 1, title: 'Nhà giả kim', author: 'Paulo Coelho', category: 'Tiểu thuyết', quantity: 3 },
  { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Lịch sử', quantity: 2 },
])

const addBook = () => {
  if (!bookTitle.value || !bookAuthor.value || !bookCategory.value || !(bookQuantity.value > 0)) {
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

const deleteBook = (id) => {
  if (confirm('Bạn có chắc chắn muốn xóa sách này không?')) {
    books.value = books.value.filter((book) => book.id !== id)
  }
}
</script>
