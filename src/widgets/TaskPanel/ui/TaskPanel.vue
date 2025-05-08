<script setup lang="ts">
import { Card } from "@features/Card";
import { useTasksStore } from "@features/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { completedTheTask } from "@entities/completeTheTask";
import { ITask } from "@shared/types";
import { onMounted, watch, watchEffect } from "vue";
import { sortTasks } from "../utils";
import { useTaskPanelStore } from "../model";
import { deleteTask } from "@entities/deleteTask";
import { EndpointsEnum } from "@shared/api";
import { getAllTasks } from "@entities/getAllTasks";
import { getCompletedTasks } from "@entities/getCompletedTasks";

const props = defineProps<{
  tasks: ITask[];
}>();
const { importantTasks, urgentTasks, insignificantTasks } = storeToRefs(
  useTaskPanelStore()
);

const { completeTheTask, allTasks } = storeToRefs(useTasksStore());

onMounted(async () => {
  allTasks.value = (await getAllTasks()).tasks;
  completeTheTask.value = (await getCompletedTasks()).data;
  console.log(completeTheTask.value);
  console.log(allTasks.value);
});

watchEffect(() => {
  importantTasks.value = [];
  urgentTasks.value = [];
  insignificantTasks.value = [];
  sortTasks(
    allTasks.value,
    importantTasks.value,
    urgentTasks.value,
    insignificantTasks.value
  );
});
</script>

<template>
  <div
    class="container task-categories grid grid-cols-3 gap-[30vw] !p-10"
    v-if="tasks.length"
  >
    <div class="task-important" @dragover.prevent @dragenter.prevent>
      <div class="text-3xl font-bold !text-white">Important</div>
      <Card
        draggable
        :color="'bg-gray-800 '"
        v-if="importantTasks.length"
        v-for="el in importantTasks"
        :key="el.id"
        :id="el.id"
        :title="el.title"
        :text="el.text"
        :importance="el.importance"
        :tasks="allTasks"
        :delete-task="
          async () =>
            await deleteTask(el, importantTasks, EndpointsEnum.MYTASKS)
        "
        :execute-task="
          () => completedTheTask(completeTheTask, el, importantTasks, allTasks)
        "
      />
      <div v-else class="tasks-empty text-xl w-28 !mt-10">Задач нет</div>
    </div>
    <div class="task-urgent">
      <div class="text-3xl font-bold !text-white">Urgent</div>
      <Card
        v-if="urgentTasks.length"
        v-for="el in urgentTasks"
        :key="el.id"
        :id="el.id"
        :title="el.title"
        :text="el.text"
        :importance="el.importance"
        :tasks="allTasks"
        :delete-task="
          async () => await deleteTask(el, urgentTasks, EndpointsEnum.MYTASKS)
        "
        :execute-task="
          () => completedTheTask(completeTheTask, el, urgentTasks, allTasks)
        "
      />
      <div v-else class="tasks-empty text-xl w-28 !mt-10">Задач нет</div>
    </div>
    <div class="task-insignificant">
      <div class="text-3xl font-bold !text-white">Insignificant</div>
      <Card
        v-if="insignificantTasks.length"
        v-for="el in insignificantTasks"
        :key="el.id"
        :id="el.id"
        :title="el.title"
        :text="el.text"
        :importance="el.importance"
        :tasks="allTasks"
        :delete-task="
          async () =>
            await deleteTask(el, insignificantTasks, EndpointsEnum.MYTASKS)
        "
        :execute-task="
          () =>
            completedTheTask(completeTheTask, el, insignificantTasks, allTasks)
        "
      />
      <div v-else class="tasks-empty text-xl w-28 !mt-10">Задач нет</div>
    </div>
  </div>

  <div class="container text-xl font-bold !text-white" v-else>
    Список задач пуст
  </div>
</template>

<style scoped></style>
