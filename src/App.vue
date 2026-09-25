<script setup>
import { useDark, useToggle } from "@vueuse/core";
import CardLayout from "./components/CardLayout.vue";
import ProjectCard from "./components/ProjectCard.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <p>Dark theme: {{ isDark }}</p>
  <button type="button" @click="toggleDark()">Toggle theme</button>

  <ProjectCard></ProjectCard>
</template>
