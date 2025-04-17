import { defineStore } from "pinia";
import { ref } from "vue";

export const useDrawerStore = defineStore("drawer", () => {
  const visible = ref<boolean>(false);

  return { visible };
});
