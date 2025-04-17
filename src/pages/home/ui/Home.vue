<script setup lang="ts">
import { TaskPanel } from "@widgets/TaskPanel";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { getMyTasks } from "@features/getMyTasks";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { getCompletedTasks } from "@features/getCompletedTasks";

const tasksStore = useTasksStore();
const { myTasks, completeTheTask } = storeToRefs(tasksStore);

onMounted(async () => {
  myTasks.value = (await getMyTasks()).myTasks;
  completeTheTask.value = (await getCompletedTasks()).data;
  console.log(completeTheTask.value);
  console.log(myTasks.value);
});
</script>

<template>
  <div class="container !p-10 !grid grid-cols-4 gap-16">
    <TaskPanel :tasks="myTasks" />
  </div>
</template>

<style scoped></style>
