import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { ITask } from "@shared/types";

export const useTaskPanelStore = defineStore("", () => {
  const importantTasks = ref<ITask[]>([]);
  const urgentTasks = ref<ITask[]>([]);
  const insignificantTasks = ref<ITask[]>([]);

  return { importantTasks, urgentTasks, insignificantTasks };
});
