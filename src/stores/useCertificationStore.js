import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";

export const useCertificationStore = defineStore("certifications", () => {
  const certifications = ref([]);
  const loading = shallowRef(false);
  const error = shallowRef(null);

  const totalCertifications = computed(() => certifications.value.length);

  async function loadCertifications() {
    if (certifications.value.length > 0) return;

    loading.value = true;
    error.value = null;

    try {
      certifications.value = [
        {
          id: "1",
          badgeUrl: "",
          name: "Developer I",
          issuedDate: new Date("2026-08-31T00:00:00"),
          credentialId: "5977552",
        },
      ];
    } catch (err) {
      console.error("Failed to load certs:", err);
      error.value = "Failed to load certs. Please try again later.";
    } finally {
      loading.value = false;
    }
  }

  return {
    certifications,
    loading,
    error,
    totalCertifications,
    loadCertifications,
  };
});
