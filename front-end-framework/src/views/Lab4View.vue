<template>
  <div>
    <h1 class="mb-4">Lab 4</h1>
    <LabSection title="Bài 1: Thêm sách từ form"><Bai1 /></LabSection>
    <LabSection title="Bài 2: Thêm sách khi nhấn Enter"><Bai2 /></LabSection>
    <LabSection title="Bài 3: Xóa sách (có xác nhận)"><Bai3 /></LabSection>
    <LabSection title="Bài 4: Cập nhật thông tin sách"><Bai4 /></LabSection>
  </div>
</template>

<script setup>
import LabSection from '@/components/LabSection.vue'
import Bai1 from '@/Labs/Lab-4/Bai1.vue'
import Bai2 from '@/Labs/Lab-4/Bai2.vue'
import Bai3 from '@/Labs/Lab-4/Bai3.vue'
import Bai4 from '@/Labs/Lab-4/Bai4.vue'
</script>
