import { defineStore } from "pinia";
import { ref } from "vue";

export const useDialogEditStore = defineStore("dialogEdit", () => {
  const visibleDialog = ref(false);
  const ID = ref<string | undefined>("");
  const text = ref("");
  const title = ref("");

  return { visibleDialog, ID, text, title };
});
