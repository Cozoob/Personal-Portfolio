<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

defineEmits(["click"]);

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "outline"].includes(value);
    },
  },
  iconName: {
    type: [String, null],
    default: null,
  },
});

const isPrimary = computed(() => props.variant === "primary");
const isOutline = computed(() => props.variant === "outline");
</script>

<template>
  <button
    type="button"
    class="button"
    :class="{
      'button--primary': isPrimary,
      'button--outline': isOutline,
    }"
    @click="$emit('click')"
  >
    <span>{{ text }}</span>
    <Icon
      v-if="iconName"
      class="button__icon"
      :class="{
        'button__icon--primary': isPrimary,
        'button__icon--outline': isOutline,
      }"
      :icon="iconName"
      inline="true"
    />
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: var(--space-sm) var(--space-md);
  border-radius: 0.5rem;
  font-size: var(--text-size-body-sm);
  transition: all 150ms ease;

  &--primary {
    border: 2px solid var(--accent-primary);
    background-color: var(--accent-primary);
    color: white;

    &:hover {
      background-color: var(--accent-dark);
      border-color: var(--accent-dark);
    }
  }

  &--outline {
    border: 2px solid var(--text-primary);
    background-color: var(--bg-primary);
    color: var(--text-primary);

    &:hover {
      border-color: var(--accent-primary);
      color: var(--accent-primary);
    }

    &:hover .button__icon {
      color: var(--accent-primary);
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }

  &__icon {
    font-size: var(--text-size-body-sm);
    padding-left: 5px;

    &--primary {
      color: white;
    }

    &--outline {
      color: var(--text-primary);
    }
  }
}
</style>
