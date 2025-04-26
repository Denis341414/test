import { defineStore } from "pinia";
import { ref } from "vue";

export const useDialogEditStore = defineStore("dialogEdit", () => {
  const visibleDialog = ref(false);
  const ID = ref<string | undefined>("");
  const textEdit = ref<string | undefined>("");
  const titleEdit = ref<string | undefined>("");
  const importanceEdit = ref<string | undefined>("");

  return { visibleDialog, ID, textEdit, titleEdit, importanceEdit };
});
