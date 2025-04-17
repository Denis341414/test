<script setup lang="ts">
import { Card } from "@entities/Card";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { completedTheTask } from "@features/completeTheTask";
import { ITask } from "@shared/types";

const tasksStore = useTasksStore();
const { completeTheTask } = storeToRefs(tasksStore);

const props = defineProps<{
  tasks: ITask[];
}>();
</script>

<template>
  <Card
    v-for="el in props.tasks"
    :key="el.id"
    :title="el.title"
    :text="el.text"
    :execute-task="() => completedTheTask(completeTheTask, el)"
  />
</template>

<style scoped></style>
