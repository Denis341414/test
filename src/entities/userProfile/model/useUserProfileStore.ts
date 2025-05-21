import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserProfileStore = defineStore("userProfile", () => {
  const userCurrent = ref();
  const userUid = ref();

  return { userCurrent, userUid };
});
