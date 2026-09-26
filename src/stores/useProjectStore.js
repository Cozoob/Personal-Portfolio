import { defineStore } from "pinia";
import { collection } from 'firebase/firestore';
import { computed } from "vue";
import { firestore } from "../firebase/index.js";
import { useCollection } from "vuefire";

export const useProjectStore = defineStore("projects", () => {
  const projectsRef = collection(firestore, "projects");

  const {
    data: projects,
    pending: loading,
    error,
    promise,
  } = useCollection(projectsRef);

  const totalProjects = computed(() => projects.value.length);
  const getProjectById = computed(() => {
    return (id) => projects.value.find((project) => project.id === id);
  });

  async function loadProjects() {
    try {
      await promise.value;
    } catch (err) {
      console.error("Failed to load projects:", err);
    }
  }

  return {
    projects,
    loading,
    error,
    totalProjects,
    getProjectById,
    loadProjects,
  };
});
