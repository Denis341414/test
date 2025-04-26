import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormTaskStore = defineStore("formTask", () => {
  const title = ref("");
  const text = ref("");

  return {
    title,
    text,
  };
});
