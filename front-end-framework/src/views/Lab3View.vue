<template>
  <div>
    <h1 class="mb-4">Lab 3</h1>
    <LabSection title="Bài 1: Trạng thái sản phẩm bằng v-if và v-show"><Bai1 /></LabSection>
    <LabSection title="Bài 2: Phân loại số lượng bằng v-else-if"><Bai2 /></LabSection>
    <LabSection title="Bài 3: Danh sách sản phẩm với v-for và destructuring"><Bai3 /></LabSection>
    <LabSection title="Bài 4: Template, điều kiện, tổng tồn kho và lọc danh mục"><Bai4 /></LabSection>
  </div>
</template>

<script setup>
import LabSection from '@/components/LabSection.vue'
import Bai1 from '@/Labs/Lab-3/Bai1.vue'
import Bai2 from '@/Labs/Lab-3/Bai2.vue'
import Bai3 from '@/Labs/Lab-3/Bai3.vue'
import Bai4 from '@/Labs/Lab-3/Bai4.vue'
</script>
