import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./app/router";
import { PrimeVue } from "@primevue/core";
import { firebaseConfig } from "@app/firebase";
import Aura from "@primeuix/themes/aura";
import { initializeApp } from "firebase/app";

const pinia = createPinia();

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.use(pinia);
app.mount("#app");
