import { defineStore } from "pinia";
import { computed } from "vue";
import { firestore } from "../firebase/index.js";
import { collection } from "firebase/firestore";
import { useCollection } from "vuefire";

export const useCertificationStore = defineStore("certifications", () => {
  const certificationsRefs = collection(firestore, "certifications");

  const {
    data: rawCertifications,
    pending: loading,
    error,
    promise,
  } = useCollection(certificationsRefs);

  const totalCertifications = computed(() => certifications.value.length);

  const certifications = computed(() => {
    return rawCertifications.value.map((project) => ({
      ...project,
      id: project?.id,
      issuedDate: project?.issuedDate?.toDate()
    }));
  });

  async function loadCertifications() {
    try {
      await promise.value;
    } catch (err) {
      console.error("Failed to load certs:", err);
    }
  }

  return {
    rawCertifications,
    certifications,
    loading,
    error,
    totalCertifications,
    loadCertifications,
  };
});
