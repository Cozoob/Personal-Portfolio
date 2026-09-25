<script setup>
import { onMounted } from "vue";
import { useProjectStore } from "../stores/useProjectStore.js";
import { storeToRefs } from "pinia";
import ProjectCard from "./ProjectCard.vue";

const projectStore = useProjectStore();
const { projects, loading, error, totalProjects } = storeToRefs(projectStore);
const { loadProjects } = projectStore;

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <div>
    <header>
      <h2>Number of projects: {{ totalProjects }}</h2>
    </header>

    <div v-if="loading">Loading projects...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :thumbnail-url="project.thumbnailUrl"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
      />
    </div>
  </div>
</template>