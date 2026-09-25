import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";

export const useProjectStore = defineStore("projects", () => {
  const projects = ref([]);
  const loading = shallowRef(false);
  const error = shallowRef(null);

  const totalProjects = computed(() => projects.value.length);
  const getProjectById = computed(() => {
    return (id) => projects.value.find((project) => project.id === id);
  });

  async function loadProjects() {
    if (projects.value.length > 0) return;

    loading.value = true;
    error.value = null;

    try {
      // projects.value = await projectService.fetchAllProjects()
      projects.value = [
        {
          id: "1",
          thumbnailUrl: "",
          title: "Super projekt",
          description: "Super opis raz dwa trzy",
          tags: [
            {
              id: "tag1",
              text: "Technologia 1",
            },
            {
              id: "tag2",
              text: "Technologia 2",
            },
            {
              id: "tag3",
              text: "Technologia XYZ",
            },
          ],
        },
        {
          id: "2",
          thumbnailUrl:
            "https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80",
          title: "Super projekt 2",
          description: "Super opis raz dwa trzy !!!",
          tags: [
            {
              id: "tag1",
              text: "Technologia 1",
            },
            {
              id: "tag2",
              text: "Technologia 2",
            },
            {
              id: "tag3",
              text: "Technologia XYZ",
            },
          ],
        },
        {
          id: "3",
          thumbnailUrl: "",
          title: "Super projekt 3",
          description: "Super opis raz dwa trzy !!!",
          tags: [
            {
              id: "tag1",
              text: "Technologia 1",
            },
            {
              id: "tag2",
              text: "Technologia 2",
            },
            {
              id: "tag3",
              text: "Technologia XYZ",
            },
          ],
        },
      ];
    } catch (err) {
      console.error("Failed to load projects:", err);
      error.value = "Failed to load projects. Please try again later.";
    } finally {
      loading.value = false;
    }
  }

  return {
    projects,
    loading,
    error,
    totalProjects,
    getProjectById,
    loadProjects
  }
});
