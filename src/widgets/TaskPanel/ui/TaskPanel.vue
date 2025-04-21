<script setup lang="ts">
import { Card } from "@features/Card";
import { useTasksStore } from "@features/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { completedTheTask } from "@entities/completeTheTask";
import { ITask } from "@shared/types";
import { reactive, watchEffect } from "vue";
import { sortTasks } from "../utils";

const tasksStore = useTasksStore();
const { completeTheTask } = storeToRefs(tasksStore);
const props = defineProps<{
  tasks: ITask[];
}>();

const importantTasks = reactive<ITask[]>([]);
const urgentTasks = reactive<ITask[]>([]);
const insignificantTasks = reactive<ITask[]>([]);

watchEffect(() => {
  sortTasks(props.tasks, importantTasks, urgentTasks, insignificantTasks);
});
</script>

<template>
  <div
    class="container task-categories grid grid-cols-3 gap-[30vw] !p-10"
    v-if="tasks.length"
  >
    <div class="task-important">
      <div class="text-3xl font-bold !text-white">Important</div>
      <Card
        v-if="importantTasks.length"
        v-for="el in importantTasks"
        :key="el.id"
        :id="el.id"
        :title="el.title"
        :text="el.text"
        :execute-task="
          () => completedTheTask(completeTheTask, el, importantTasks)
        "
        :category="'Important'"
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
        :execute-task="() => completedTheTask(completeTheTask, el, urgentTasks)"
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
        :execute-task="
          () => completedTheTask(completeTheTask, el, insignificantTasks)
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
