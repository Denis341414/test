<script setup lang="ts">
import { Card } from "@entities/Card";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { getMyTasks } from "@features/getMyTasks";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { completedTheTask } from "@features/completeTheTask";
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
  <Card
    v-for="el in myTasks"
    :key="el.id"
    :title="el.title"
    :text="el.text"
    :execute-task="() => completedTheTask(completeTheTask, el)"
  />
</template>

<style scoped></style>
