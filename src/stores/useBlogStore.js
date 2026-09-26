import { defineStore } from "pinia";
import { collection } from "firebase/firestore";
import { computed } from "vue";
import { firestore } from "../firebase/index.js";
import { useCollection } from "vuefire";

export const useBlogStore = defineStore("blogs", () => {
  const blogsRef = collection(firestore, "blogs");

  const {
    data: rawBlogs,
    pending: loading,
    error,
    promise
  } = useCollection(blogsRef);

  const totalBlogs = computed(() => blogs.value.length);

  const blogs = computed(() => {
    return rawBlogs.value.map((blog) => ({
      ...blog,
      id: blog?.id,
      createdDate: blog?.createdDate?.toDate(),
    }));
  })

  async function loadBlogs() {
    try {
      await promise.value;
    } catch (err) {
      console.error("Failed to load blogs:", err);
    }
  }

  return {
    rawBlogs,
    blogs,
    loading,
    error,
    totalBlogs,
    loadBlogs,
  };
});
