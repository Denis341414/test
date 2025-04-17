import { ITask } from "@shared/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const completeTheTask = ref<ITask[]>([]);
  const myTasks = ref<ITask[]>([]);
  const allTasks = ref<ITask[]>([]);

  return { completeTheTask, myTasks, allTasks };
});
