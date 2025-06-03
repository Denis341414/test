import { localStorageKeys } from "@pages/signin/keys";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserProfileStore = defineStore("userProfile", () => {
  const userCurrent = computed({
    get() {
      if (localStorage.getItem(localStorageKeys.USERCURRENT)) {
        const user = String(localStorage.getItem(localStorageKeys.USERCURRENT));
        return JSON.parse(user);
      }
    },

    set(newValue) {
      return newValue;
    },
  });

  return { userCurrent };
});
