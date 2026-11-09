<template>
  <div class="card mb-3">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot>
        <p class="text-muted mb-0">Không có nội dung.</p>
      </slot>
    </div>
  </div>
</template>
