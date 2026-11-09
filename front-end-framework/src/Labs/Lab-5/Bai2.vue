<template>
  <form @submit.prevent="submitForm" class="row g-2 align-items-end mb-4">
    <div class="col-md-3">
      <input v-model.trim="title" type="text" class="form-control" placeholder="Tiêu đề" />
    </div>
    <div class="col-md-3">
      <input v-model.trim="author" type="text" class="form-control" placeholder="Tác giả" />
    </div>
    <div class="col-md-2">
      <input v-model.number="price" type="number" min="0" class="form-control" placeholder="Giá" />
    </div>
    <div class="col-md-2">
      <input v-model.trim="category" type="text" class="form-control" placeholder="Thể loại" />
    </div>
    <div class="col-md-2">
      <button type="submit" class="btn btn-primary w-100">Thêm sách</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-book'])

const title = ref('')
const author = ref('')
const price = ref(0)
const category = ref('')

const submitForm = () => {
  if (!title.value || !author.value || !category.value) {
    alert('Vui lòng nhập đầy đủ tiêu đề, tác giả và thể loại')
    return
  }
  emit('add-book', {
    id: String(Date.now()),
    title: title.value,
    author: author.value,
    price: price.value || 0,
    category: category.value,
  })
  title.value = ''
  author.value = ''
  price.value = 0
  category.value = ''
}
</script>
