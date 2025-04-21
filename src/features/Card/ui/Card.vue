<script setup lang="ts">
import { DialogEdit } from "@features/DialogEdit";
import { useDialogEditStore } from "@features/DialogEdit/model";
import { ButtonCard } from "@shared/ui";
import { storeToRefs } from "pinia";
import { Button, Card } from "primevue";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

const dialogEditStore = useDialogEditStore();

const props = defineProps<{
  id?: string;
  text?: string;
  title?: string;
  status?: string;
  importance?: string;
  executeTask?: () => void;
  Task?: () => void;
}>();

const router = useRoute();
</script>

<template>
  <div class="card">
    <Card
      style="width: 20rem; overflow: hidden"
      class="bg-green-800 !m-4 !p-8 !text-center transition-all !shadow-xl/10 !rounded-xl hover:scale-105 hover:!shadow-xl/20 hover:shadow-green-200 hover:!m-6"
      :class="
        props.importance === 'important' ? '!bg-red-800' : '!bg-green-700'
      "
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
          <ButtonCard v-if="router.name !== 'Tasks'" :label="'Удалить'" />
          <!-- <ButtonCard v-else :label="'редактировать'" :func="editTask" /> -->
          <DialogEdit v-else :id="props.id" />
          <Button
            @click="executeTask"
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
