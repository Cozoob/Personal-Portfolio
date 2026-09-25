<template>
  <div class="card">
    <div v-if="$slots.card_header">
      <slot name="card_header"></slot>
    </div>
    <div v-if="$slots.card_details">
      <slot name="card_details"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 1rem;
}
</style>
