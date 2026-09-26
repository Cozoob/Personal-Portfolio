import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/style.css";
import App from "./App.vue";
import { VueFire } from "vuefire";
import { firebaseApp } from "./firebase";

createApp(App)
  .use(createPinia())
  .use(VueFire, { firebaseApp })
  .mount("#app");
