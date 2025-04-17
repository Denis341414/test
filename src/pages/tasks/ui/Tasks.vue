<script setup lang="ts">
import FormTask from "@entities/FormTask/ui/FormTask.vue";
import { TaskPanel } from "@widgets/TaskPanel";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { getCompletedTasks } from "@features/getCompletedTasks";

import { getAllTasks } from "@features/getAllTasks";

const tasksStore = useTasksStore();
const { completeTheTask, allTasks } = storeToRefs(tasksStore);

onMounted(async () => {
  allTasks.value = (await getAllTasks()).tasks;
  completeTheTask.value = (await getCompletedTasks()).data;
  console.log(completeTheTask.value);
  console.log(allTasks.value);
});
</script>

<template>
  <div class="container">
    <FormTask />
    <div class="container !p-10 !grid grid-cols-4 gap-16">
      <TaskPanel :tasks="allTasks" />
    </div>
  </div>
</template>

<style scoped></style>
