<script setup>
import CardLayout from "./CardLayout.vue";
import BaseTag from "./BaseTag.vue";
import BaseButton from "./BaseButton.vue";
import { computed } from "vue";

const props = defineProps({
  thumbnailUrl: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: "Title",
  },
  description: {
    type: String,
    default: "Opis",
  },
  tags: {
    type: Array,
    default() {
      return [];
    },
  },
  readTimeInMinutes: {
    type: Number,
    default: 1,
  },
  createdDate: {
    type: Date,
    default: null,
  },
});

const dateOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
};
const locales = "en-US";

const formattedCreatedDate = computed(() => {
  const date = props.createdDate;

  if (date) {
    return date.toLocaleDateString(locales, dateOptions);
  }
  return "";
});

const formattedReadTimeText = computed(() => {
  if (props.readTimeInMinutes > 1) {
    return `${props.readTimeInMinutes} mins read`;
  }

  return `${props.readTimeInMinutes} min read`;
});
</script>

<template>
  <CardLayout class="card">
    <template #card_header>
      <div v-if="thumbnailUrl" class="card__image">
        <img class="image" :src="thumbnailUrl" />
      </div>
      <div v-else class="card__image card__image--no-image">
        <h2>{{ title }}</h2>
      </div>
    </template>
    <template #card_details>
      <div class="card__details details">
        <div class="details__blog-meta">
          <time :datetime="createdDate">{{ formattedCreatedDate }}</time>
          <span v-if="createdDate">•</span>
          <span>{{ formattedReadTimeText }}</span>
        </div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="details__tags">
          <BaseTag v-for="tag in tags" :key="tag.id" :text="tag.text" />
        </div>
        <BaseButton
          variant="primary"
          text="View"
          icon-name="at-icons:arrow-right"
        />
      </div>
    </template>
  </CardLayout>
</template>

<style scoped lang="scss">
.card {
  max-width: 25rem;

  &__image {
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16/9;

    &--no-image {
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__details {
    padding: 0 var(--space-lg) var(--space-lg) var(--space-lg);
  }
}

.image {
  width: 100%;
}

.details {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  &__blog-meta {
    font-size: var(--text-size-body-sm);
    font-weight: lighter;
    display: flex;
    gap: var(--space-xs);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }
}
</style>
