<script setup lang="ts">
import { TaskPanel } from "@widgets/TaskPanel";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { getMyTasks } from "@entities/getMyTasks";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { getCompletedTasks } from "@entities/getCompletedTasks";
import { useUserProfileStore } from "@entities/userProfile";

const tasksStore = useTasksStore();
const { myTasks, completeTheTask } = storeToRefs(tasksStore);
const { userCurrent } = storeToRefs(useUserProfileStore());

onMounted(async () => {
  myTasks.value = await getMyTasks(userCurrent.value.uid);
  completeTheTask.value = (await getCompletedTasks()).data;
  console.log(completeTheTask.value);
  console.log(myTasks.value);
  console.log(await getMyTasks(userCurrent.value.uid));
});
</script>

<template>
  <h1 class="text-3xl text-center !p-10">Задачи на сегодня</h1>
  <div class="container !p-10 !grid grid-cols-4">
    <TaskPanel :tasks="myTasks" />
  </div>
</template>

<style scoped></style>
