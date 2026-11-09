<template>
  <div>
    <h1 class="mb-4">Lab 1</h1>
    <LabSection title="Bài 2: Chương trình VueJS đầu tiên"><Bai2 /></LabSection>
    <LabSection title="Bài 3: Hiển thị và thay đổi lời chào"><Bai3 /></LabSection>
    <LabSection title="Bài 4: Danh sách sản phẩm với Bootstrap"><Bai4 /></LabSection>
  </div>
</template>

<script setup>
import LabSection from '@/components/LabSection.vue'
import Bai2 from '@/Labs/Lab-1/Bai2.vue'
import Bai3 from '@/Labs/Lab-1/Bai3.vue'
import Bai4 from '@/Labs/Lab-1/Bai4.vue'
</script>
