import { ITask } from "@shared/types";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const completeTheTask = ref<ITask[]>([]);
  const myTasks = ref<ITask[]>([]);
  const allTasks = reactive<ITask[]>([]);

  function addTask(task: ITask) {
    allTasks.push(task);
  }

  return { completeTheTask, myTasks, allTasks, addTask };
});
