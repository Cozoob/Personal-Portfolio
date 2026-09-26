<script setup>
import { useDateFormatter } from "../composable/useDateFormatter.js";

const props = defineProps({
  badgeUrl: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: "certification",
  },
  issuedDate: {
    type: Date,
    default: null,
  },
  credentialId: {
    type: String,
    default: null,
  },
});

const { formattedDate: formattedIssuedDate } = useDateFormatter(
  () => props.issuedDate,
);
</script>

<template>
  <div class="card">
    <div class="card__badge">
      <img v-if="badgeUrl" :src="badgeUrl" />
      <div v-else class="card__badge--no-badge"></div>
    </div>
    <h3>{{ name }}</h3>
    <div class="card__cert-info">
      <span v-if="issuedDate">{{ formattedIssuedDate }}</span>
      <span v-if="issuedDate && credentialId">|</span>
      <span v-if="credentialId">Credential ID: {{ credentialId }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 1rem;
  max-width: 25rem;
  padding: var(--space-lg);

  &__badge {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;

    &--no-badge {
      width: 5rem;
      height: 5rem;
      border-radius: var(--radius-full);
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__cert-info {
    display: flex;
    font-weight: lighter;
    gap: var(--space-xs);
  }
}
</style>
