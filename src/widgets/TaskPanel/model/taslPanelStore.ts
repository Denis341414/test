import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { ITask } from "@shared/types";

export const useTaskPanelStore = defineStore("", () => {
  const importantTasks = reactive<ITask[]>([]);
  const urgentTasks = reactive<ITask[]>([]);
  const insignificantTasks = reactive<ITask[]>([]);

  return { importantTasks, urgentTasks, insignificantTasks };
});
