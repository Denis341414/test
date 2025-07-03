<script setup lang="ts">
import FormTask from "@features/FormTask/ui/FormTask.vue";
import { TaskPanel } from "@widgets/TaskPanel";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { getCompletedTasks } from "@entities/getCompletedTasks";

import { getAllTasks } from "@entities/getAllTasks";
import { addInMyTask } from "@entities/addInMyTask";
import { useFormTaskStore } from "@features/FormTask/model";
import { useUserProfileStore } from "@entities/userProfile";

const { title, text, importanceItem } = storeToRefs(useFormTaskStore());
const { completeTheTask, allTasks } = storeToRefs(useTasksStore());

const { userCurrent } = storeToRefs(useUserProfileStore());

onMounted(async () => {
  allTasks.value = (await getAllTasks()).tasks;
  completeTheTask.value = await getCompletedTasks();
  console.log(completeTheTask.value);
  console.log(allTasks.value);
});

const test = async () => {
  await addInMyTask(
    title.value,
    text.value,
    importanceItem.value,
    userCurrent.value.uid,
    allTasks.value
  );
};
</script>

<template>
  <div class="container-tasks">
    <FormTask
      :func="
        async () => {
          await test();
        }
      "
      :lable="'Сохранить'"
    />
    <div class="!p-10 !grid grid-cols-4 gap-16">
      <TaskPanel :tasks="allTasks" />
    </div>
  </div>
</template>

<style scoped></style>
