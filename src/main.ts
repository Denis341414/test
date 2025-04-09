import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./app/router";
import { PrimeVue } from "@primevue/core";
import Aura from "@primeuix/themes/aura";

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue, {
  theme: Aura,
});
app.mount("#app");
