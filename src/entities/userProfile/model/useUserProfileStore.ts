import { localStorageKeys } from "@pages/signin/keys";
import { ITask, UserCurrent } from "@shared/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserProfileStore = defineStore("userProfile", () => {
  const userCurrent = computed<UserCurrent>({
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
  const username = computed({
    get() {
      if (localStorage.getItem("username")) {
        const name = localStorage.getItem("username");
        return name;
      }
    },
    set(newValue) {
      return newValue;
    },
  });

  const myCompletedTasks = ref<ITask[]>([]);
  const myTasks = ref<ITask[]>([]);

  return { userCurrent, username, myCompletedTasks, myTasks };
});
