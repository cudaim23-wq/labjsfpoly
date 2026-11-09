<template>
  <div>
    <h1 class="mb-4">Lab 2</h1>
    <LabSection title="Bài 1: Quản lý trạng thái với ref()"><Bai1 /></LabSection>
    <LabSection title="Bài 2: Quản lý trạng thái với reactive()"><Bai2 /></LabSection>
    <LabSection title="Bài 3: One-way và Two-way Data Binding"><Bai3 /></LabSection>
    <LabSection title="Bài 4: Class và Style Binding"><Bai4 /></LabSection>
  </div>
</template>

<script setup>
import LabSection from '@/components/LabSection.vue'
import Bai1 from '@/Labs/Lab-2/Bai1.vue'
import Bai2 from '@/Labs/Lab-2/Bai2.vue'
import Bai3 from '@/Labs/Lab-2/Bai3.vue'
import Bai4 from '@/Labs/Lab-2/Bai4.vue'
</script>
