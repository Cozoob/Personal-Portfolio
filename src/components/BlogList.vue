<script setup>
import { useBlogStore } from "../stores/useBlogStore.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import BlogCard from "./BlogCard.vue";

const blogStore = useBlogStore();
const { blogs, loading, error, totalBlogs } = storeToRefs(blogStore);
const { loadBlogs } = blogStore;

onMounted(() => {
  loadBlogs();
});
</script>

<template>
  <div>
    <header>
      <h2>Number of blogs: {{ totalBlogs }}</h2>
    </header>

    <div v-if="loading">Loading projects...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :thumbnail-url="blog.thumbnailUrl"
        :created-date="blog.createdDate"
        :read-time-in-minutes="blog.readTimeInMinutes"
        :title="blog.title"
        :description="blog.description"
        :tags="blog.tags"
      />
    </div>
  </div>
</template>
