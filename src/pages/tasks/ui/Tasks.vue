<script setup lang="ts">
import FormTask from "@features/FormTask/ui/FormTask.vue";
import { TaskPanel } from "@widgets/TaskPanel";
import { useTasksStore } from "@features/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { getCompletedTasks } from "@entities/getCompletedTasks";

import { getAllTasks } from "@entities/getAllTasks";

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
    <FormTask func />
    <div class="container !p-10 !grid grid-cols-4 gap-16">
      <TaskPanel :tasks="allTasks" />
    </div>
  </div>
</template>

<style scoped></style>
