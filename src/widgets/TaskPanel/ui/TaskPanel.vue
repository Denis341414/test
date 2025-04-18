<script setup lang="ts">
import { Card } from "@entities/Card";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { completedTheTask } from "@features/completeTheTask";
import { ITask } from "@shared/types";
import { onMounted, reactive, ref, watchEffect } from "vue";

const tasksStore = useTasksStore();
const { completeTheTask } = storeToRefs(tasksStore);
const props = defineProps<{
  tasks: ITask[];
}>();

const importantTasks = ref<ITask[]>([]);
const urgentTasks = ref<ITask[]>([]);
const insignificantTasks = ref<ITask[]>([]);
watchEffect(() => {
  for (let el of props.tasks) {
    switch (el.importance) {
      case "important":
        importantTasks.value.push(el);
        break;
      case "Urgent":
        urgentTasks.value.push(el);
        break;
      case "Insignificant":
        insignificantTasks.value.push(el);
        break;
    }
  }
});
</script>

<template>
  <div
    class="container task-categories grid grid-cols-3 gap-[30vw] !p-10"
    v-if="tasks.length"
  >
    <div class="task-important">
      <div class="text-2xl">Important</div>
      <Card
        v-for="el in importantTasks"
        :key="el.id"
        :title="el.title"
        :text="el.text"
        :execute-task="() => completedTheTask(completeTheTask, el)"
        :category="'Important'"
      />
    </div>
    <div class="task-urgent">
      <div class="text-2xl">Urgent</div>
      <Card
        v-for="el in urgentTasks"
        :key="el.id"
        :title="el.title"
        :text="el.text"
        :importance="el.importance"
        :execute-task="() => completedTheTask(completeTheTask, el)"
      />
    </div>
    <div class="task-insignificant">
      <div class="text-2xl">Insignificant</div>
      <Card
        v-for="el in insignificantTasks"
        :key="el.id"
        :title="el.title"
        :text="el.text"
        :execute-task="() => completedTheTask(completeTheTask, el)"
      />
    </div>
  </div>

  <div class="container text-2xl font-bold !text-white" v-else>
    СПИСОК ЗАДАЧ ПУСТ
  </div>
</template>

<style scoped></style>
