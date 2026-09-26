<script setup>
import { useCertificationStore } from "../stores/useCertificationStore.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import CertificationCard from "./CertificationCard.vue";

const certificationStore = useCertificationStore();
const { certifications, loading, error, totalCertifications } =
  storeToRefs(certificationStore);
const { loadCertifications } = certificationStore;

onMounted(() => {
  loadCertifications();
});
</script>

<template>
  <div>
    <header>
      <h2>Number of certs: {{ totalCertifications }}</h2>
    </header>
  </div>

  <div v-if="loading">Loading certs...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <CertificationCard
      v-for="cert in certifications"
      :key="cert.id"
      :badge-url="cert.badgeUrl"
      :name="cert.name"
      :issued-date="cert.issuedDate"
      :credential-id="cert.credentialId"
    />
  </div>
</template>
