<template>
  <div>
    <h1 class="mb-4">Lab 5</h1>

    <LabSection title="Bài 1: Component BookCard với props">
      <Bai1 id="1" title="Cuốn sách 1" author="Tác giả A" :price="150000" category="Fiction" />
    </LabSection>

    <LabSection title="Bài 2: BookForm dùng emit add-book">
      <Bai2 @add-book="addBook" />
      <p v-if="!books.length" class="text-muted mb-0">Chưa có sách nào, hãy thêm bằng form ở trên.</p>
      <div class="row">
        <div v-for="book in books" :key="book.id" class="col-md-4">
          <Bai1
            :id="book.id"
            :title="book.title"
            :author="book.author"
            :price="book.price"
            :category="book.category"
          />
        </div>
      </div>
    </LabSection>

    <LabSection title="Bài 3: CardContainer dùng slot">
      <div class="row">
        <div class="col-md-6">
          <Bai3>
            <h5 class="card-title">Tiêu đề sách</h5>
            <h6 class="card-subtitle mb-2 text-muted">Tác giả: Tác giả A</h6>
            <p class="card-text mb-1">Giá: 150000 VND</p>
            <p class="card-text">Thể loại: Fiction</p>
          </Bai3>
        </div>
        <div class="col-md-6">
          <Bai3>
            <template #header>Thông báo</template>
            <p class="mb-2">Cùng một component, nhưng truyền nội dung khác qua slot.</p>
            <button class="btn btn-sm btn-outline-primary">Nút tùy chỉnh</button>
          </Bai3>
        </div>
      </div>
    </LabSection>

    <LabSection title="Bài 4: ThemeProvider dùng scoped slot và provide/inject">
      <Bai4>
        <template #default="{ theme }">
          <h2>Chủ đề hiện tại: {{ theme }}</h2>
          <ThemeLabel />
          <Bai3>
            <h5 class="card-title text-dark">Tiêu đề sách</h5>
            <h6 class="card-subtitle mb-2 text-muted">Tác giả: Tác giả A</h6>
            <p class="card-text text-dark mb-1">Giá: 150000 VND</p>
            <p class="card-text text-dark">Thể loại: Fiction</p>
          </Bai3>
        </template>
      </Bai4>
    </LabSection>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LabSection from '@/components/LabSection.vue'
import Bai1 from '@/Labs/Lab-5/Bai1.vue'
import Bai2 from '@/Labs/Lab-5/Bai2.vue'
import Bai3 from '@/Labs/Lab-5/Bai3.vue'
import Bai4 from '@/Labs/Lab-5/Bai4.vue'
import ThemeLabel from '@/Labs/Lab-5/ThemeLabel.vue'

const books = ref([])

const addBook = (book) => {
  books.value.push(book)
}
</script>
