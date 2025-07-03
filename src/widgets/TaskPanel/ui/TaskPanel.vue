<script setup lang="ts">
import { Card } from "@features/Card";
import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { storeToRefs } from "pinia";
import { completedTheTask } from "@entities/completeTheTask";
import { ITask } from "@shared/types";
import { onMounted, onUpdated, watchEffect } from "vue";
import { sortTasks } from "../utils";
import { useTaskPanelStore } from "../model";
import { deleteTask } from "@entities/deleteTask";
import { EndpointsEnum } from "@shared/api";
import { useUserProfileStore } from "@entities/userProfile";
import { dragStart, onDrop } from "../utils";

const props = defineProps<{
  tasks: ITask[];
}>();
const { importantTasks, urgentTasks, insignificantTasks } = storeToRefs(
  useTaskPanelStore()
);

const { userCurrent } = storeToRefs(useUserProfileStore());

const { allTasks } = storeToRefs(useTasksStore());

watchEffect(() => {
  importantTasks.value = [];
  urgentTasks.value = [];
  insignificantTasks.value = [];
  sortTasks(
    props.tasks,
    importantTasks.value,
    urgentTasks.value,
    insignificantTasks.value
  );
});
</script>

<template>
  <div
    class="tasks-categories grid grid-cols-3 gap-[30vw] !p-10"
    v-if="props.tasks.length"
  >
    <div
      class="tasks-container task-important"
      @dragover.prevent
      @dragenter.prevent
      @drop="onDrop($event, 'important', props.tasks)"
    >
      <div class="text-3xl font-bold !text-gray-500">Important</div>
      <Card
        @dragstart="dragStart($event, el)"
        draggable="true"
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
          () => completedTheTask(el, importantTasks, userCurrent.uid)
        "
      />
      <div v-else class="tasks-empty text-xl w-28 !mt-10">Задач нет</div>
    </div>
    <div
      class="tasks-container task-urgent"
      @dragover.prevent
      @dragenter.prevent
      @drop="onDrop($event, 'urgent', props.tasks)"
    >
      <div class="text-3xl font-bold !text-gray-500">Urgent</div>
      <Card
        @dragstart="dragStart($event, el)"
        draggable="true"
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
        :execute-task="() => completedTheTask(el, urgentTasks, userCurrent.uid)"
      />
      <div v-else class="tasks-empty text-xl w-28 !mt-10">Задач нет</div>
    </div>
    <div
      class="tasks-container task-insignificant"
      @dragover.prevent
      @dragenter.prevent
      @drop="onDrop($event, 'insignificant', props.tasks)"
    >
      <div class="text-3xl font-bold !text-gray-500">Insignificant</div>
      <Card
        @dragstart="dragStart($event, el)"
        draggable="true"
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
          () => completedTheTask(el, insignificantTasks, userCurrent.uid)
        "
      />
      <div v-else class="tasks-empty text-xl w-28 !mt-10">Задач нет</div>
    </div>
  </div>

  <div class="container text-xl font-bold !text-white" v-else>
    Список задач пуст
  </div>
</template>

<style scoped>
.tasks-container {
  min-width: 320px;
  padding: 1em;
}
</style>
