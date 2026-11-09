<template>
  <div class="container">
    <h2>{{ isEditing ? 'Cập nhật thông tin sách' : 'Thêm sách mới' }}</h2>
    <form @submit.prevent="isEditing ? updateBook() : addBook()" class="row g-2 align-items-end">
      <div class="col-md-3">
        <label class="form-label">Tiêu đề</label>
        <input :value="bookTitle" @input="bookTitle = $event.target.value" class="form-control" />
      </div>
      <div class="col-md-3">
        <label class="form-label">Tác giả</label>
        <input :value="bookAuthor" @input="bookAuthor = $event.target.value" class="form-control" />
      </div>
      <div class="col-md-2">
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
      <div class="col-md-3 d-flex gap-2">
        <button type="submit" class="btn flex-fill" :class="isEditing ? 'btn-success' : 'btn-primary'">
          {{ isEditing ? 'Cập nhật sách' : 'Thêm sách' }}
        </button>
        <button v-if="isEditing" type="button" class="btn btn-secondary" @click="cancelEdit">Hủy</button>
      </div>
    </form>

    <div v-if="books.length" class="mt-4">
      <h3>Danh sách sách</h3>
      <ul class="list-group">
        <li
          v-for="book in books"
          :key="book.id"
          class="list-group-item d-flex justify-content-between align-items-center"
          :class="{ 'list-group-item-warning': book.id === editingBookId }"
        >
          <div>
            <h5>{{ book.title }}</h5>
            <p class="mb-1">Tác giả: {{ book.author }}</p>
            <p class="mb-1">Thể loại: {{ book.category }}</p>
            <p class="mb-0">Số lượng: {{ book.quantity }}</p>
          </div>
          <div>
            <button @click="editBook(book)" class="btn btn-warning me-2">Sửa</button>
            <button @click="deleteBook(book.id)" class="btn btn-danger">Xóa</button>
          </div>
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
const isEditing = ref(false)
const editingBookId = ref(null)

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

const isValid = () => {
  if (!bookTitle.value || !bookAuthor.value || !bookCategory.value || !(bookQuantity.value > 0)) {
    alert('Vui lòng nhập đầy đủ thông tin sách')
    return false
  }
  return true
}

const addBook = () => {
  if (!isValid()) return
  books.value.push({
    id: Date.now(),
    title: bookTitle.value,
    author: bookAuthor.value,
    category: categories[bookCategory.value],
    quantity: bookQuantity.value,
  })
  clearForm()
}

const editBook = (book) => {
  bookTitle.value = book.title
  bookAuthor.value = book.author
  bookCategory.value = Object.keys(categories).find((key) => categories[key] === book.category)
  bookQuantity.value = book.quantity
  isEditing.value = true
  editingBookId.value = book.id
}

const updateBook = () => {
  if (!isValid()) return
  const bookIndex = books.value.findIndex((book) => book.id === editingBookId.value)
  if (bookIndex !== -1) {
    books.value[bookIndex] = {
      id: editingBookId.value,
      title: bookTitle.value,
      author: bookAuthor.value,
      category: categories[bookCategory.value],
      quantity: bookQuantity.value,
    }
  }
  clearForm()
}

const deleteBook = (id) => {
  if (confirm('Bạn có chắc chắn muốn xóa sách này không?')) {
    books.value = books.value.filter((book) => book.id !== id)
    if (id === editingBookId.value) clearForm()
  }
}

const cancelEdit = () => {
  clearForm()
}

const clearForm = () => {
  bookTitle.value = ''
  bookAuthor.value = ''
  bookCategory.value = ''
  bookQuantity.value = 1
  isEditing.value = false
  editingBookId.value = null
}
</script>
