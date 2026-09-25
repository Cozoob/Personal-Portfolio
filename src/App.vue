<script setup>
import { useDark, useToggle } from "@vueuse/core";
// import ProjectCard from "./components/ProjectCard.vue";
import ProjectList from "./components/ProjectList.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <p>Dark theme: {{ isDark }}</p>
  <button type="button" :aria-pressed="isDark"  @click="toggleDark()">
    Toggle theme
  </button>

  <ProjectList />
</template>
