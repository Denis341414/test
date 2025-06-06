import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistStore = defineStore("regist", () => {
  const email = ref("");
  const password = ref("");
  const repeatPassword = ref("");
  const name = ref("");

  return { email, password, repeatPassword, name };
});
