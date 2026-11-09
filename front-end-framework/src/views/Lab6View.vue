<template>
  <div>
    <h1 class="mb-4">Lab 6</h1>
    <p class="text-muted">Cần chạy <code>npm run server</code> trước để có API tại http://localhost:3000.</p>
    <LabSection title="Bài 1: Theo dõi Online/Offline với onMounted, onUnmounted"><Bai1 /></LabSection>
    <LabSection title="Bài 2: Tải bài viết, onBeforeUpdate và onUpdated (xem Console)"><Bai2 /></LabSection>
    <LabSection title="Bài 3: Danh sách người dùng bằng Axios"><Bai3 /></LabSection>
    <LabSection title="Bài 4: Thêm người dùng mới"><Bai4 /></LabSection>
  </div>
</template>

<script setup>
import LabSection from '@/components/LabSection.vue'
import Bai1 from '@/Labs/Lab-6/Bai1.vue'
import Bai2 from '@/Labs/Lab-6/Bai2.vue'
import Bai3 from '@/Labs/Lab-6/Bai3.vue'
import Bai4 from '@/Labs/Lab-6/Bai4.vue'
</script>
