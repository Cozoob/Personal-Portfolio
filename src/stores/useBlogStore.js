import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";

export const useBlogStore = defineStore("blogs", () => {
  const blogs = ref([]);
  const loading = shallowRef(false);
  const error = shallowRef(null);

  const totalBlogs = computed(() => blogs.value.length);

  async function loadBlogs() {
    if (blogs.value.length > 0) return;

    loading.value = true;
    error.value = null;

    try {
      // blogs.value = await blogService.fetchAllBlogs()
      blogs.value = [
        {
          id: "1",
          thumbnailUrl: "",
          title: "Super blog",
          description: "Super opis raz dwa trzy",
          readTimeInMinutes: 20,
          createdDate: new Date("2026-08-31T00:00:00"),
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
          title: "Super blog kot",
          description: "Super opis raz dwa trzy",
          readTimeInMinutes: 1,
          createdDate: new Date("2026-03-23T00:00:00"),
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
      console.error("Failed to load blogs:", err);
      error.value = "Failed to load blogs. Please try again later.";
    } finally {
      loading.value = false;
    }
  }

  return {
    blogs,
    loading,
    error,
    totalBlogs,
    loadBlogs,
  };
});
