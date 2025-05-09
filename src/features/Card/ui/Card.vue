<script setup lang="ts">
import { DialogEdit } from "@features/DialogEdit";
import { ITask } from "@shared/types";
import { ButtonCard } from "@shared/ui";
import { Button, Card } from "primevue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  tasks: ITask[];
  id?: string;
  text?: string;
  title?: string;
  status?: string;
  importance?: string;
  executeTask?: () => void;
  deleteTask?: () => void;
  Task?: () => void;
  color?: string;
}>();
const router = useRoute();

const colors = ref(["bg-green-800", "bg-gray-600", "bg-green-700"]);
</script>

<template>
  <div class="card">
    <Card
      style="width: 20rem; overflow: hidden"
      class="!m-4 !p-8 !text-center transition-all !shadow-xl/10 !rounded-xl hover:scale-105 hover:!shadow-xl/20 hover:shadow-green-200 hover:!m-6"
      :class="{
        '!bg-green-900': props.importance === 'important',
        '!bg-green-800': props.importance === 'urgent',
        '!bg-green-700': props.importance === 'insignificant',
      }"
    >
      <template #title>
        <p class="text-xl">{{ props.title }}</p>
      </template>
      <template #content>
        <p class="m-0">
          {{ props.text }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 !mt-6">
          <ButtonCard
            v-if="router.name !== 'Tasks'"
            :func="props.deleteTask"
            :label="'Удалить'"
          />
          <!-- <ButtonCard v-else :label="'редактировать'" :func="editTask" /> -->
          <DialogEdit
            v-else
            :tasks="props.tasks"
            :id="props.id"
            :text="props.text"
            :title="props.title"
            :importance="props.importance"
          />
          <Button
            @click="props.executeTask"
            type="button"
            label="Завершить"
            class="w-full !bg-green-600 h-10 opacity-[0.7] !transition-all !rounded-md hover:!bg-gray-700"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
