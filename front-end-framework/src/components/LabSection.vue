<template>
  <section class="card mb-4 shadow-sm">
    <div class="card-header fw-bold">{{ title }}</div>
    <div class="card-body">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>
