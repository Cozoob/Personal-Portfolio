<script setup>
import { useDark, useToggle } from "@vueuse/core";
import ProjectList from "./components/ProjectList.vue";
import BlogList from "./components/BlogList.vue";
import CertificationList from "./components/CertificationList.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <p>Dark theme: {{ isDark }}</p>
  <button type="button" :aria-pressed="isDark" @click="toggleDark()">
    Toggle theme
  </button>

  <CertificationList />
  <ProjectList />
  <BlogList />
</template>
