<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="tag">
    <span>{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.tag {
  width: fit-content;
  padding: var(--space-xs) var(--space-sm);
  background: var(--bg-tertiary);
  border: 1px solid var(--bg-tertiary);
  border-radius: var(--radius-full);
  font-size: var(--text-size-body-xs);
}
</style>
