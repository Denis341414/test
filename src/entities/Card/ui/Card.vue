<script setup lang="ts">
import { Button, Card } from "primevue";

const props = defineProps<{
  text?: string;
  title?: string;
  status?: string;
  executeTask?: () => void;
  Task?: () => void;
}>();

// const emit = defineEmits(["delete", "execute"]);
</script>

<template>
  <div class="card">
    <Card
      style="width: 20rem; overflow: hidden"
      class="!bg-red-800 !p-8 !text-center !rounded-xl"
    >
      <template #title>{{ props.title }}</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          {{ props.text }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 !mt-6">
          <Button
            label="Удалить"
            severity="secondary"
            outlined
            type="button"
            class="w-full !bg-gray-500 opacity-[0.7] !rounded-md"
          />
          <Button
            @click="executeTask"
            type="button"
            label="Завершить"
            class="w-full !bg-green-400 opacity-[0.7] !rounded-md"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
