<script setup lang="ts">
import { Button, Card } from "primevue";
import { useRoute } from "vue-router";

const props = defineProps<{
  text?: string;
  title?: string;
  status?: string;
  category?: string;
  importance?: string;
  executeTask?: () => void;
  Task?: () => void;
}>();

const router = useRoute();

// const emit = defineEmits(["delete", "execute"]);
</script>

<template>
  <div class="text-2xl">{{}}</div>
  <div class="card">
    <Card
      style="width: 20rem; overflow: hidden"
      class="!bg-green-400 !m-4 !p-8 !text-center transition-all !shadow-xl/10 !rounded-xl hover:scale-105 hover:!shadow-xl/20 hover:shadow-green-200 hover:!m-6"
      :class="
        props.importance === 'important' ? '!bg-green-800' : '!bg-green-700'
      "
    >
      <template #title>{{ props.title }}</template>
      <!-- <template #subtitle>Card subtitle</template> -->
      <template #content>
        <p class="m-0">
          {{ props.text }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 !mt-6">
          <Button
            v-if="router.name !== 'Tasks'"
            label="Удалить"
            severity="secondary"
            outlined
            type="button"
            class="w-full !bg-gray-500 opacity-[0.7] !transition-all !rounded-md hover:!bg-gray-700"
          />
          <Button
            v-else
            label="Редактировать"
            severity="secondary"
            outlined
            type="button"
            class="w-full !bg-gray-500 opacity-[0.7] !transition-all !rounded-md hover:!bg-gray-700"
          />
          <Button
            @click="executeTask"
            type="button"
            label="Завершить"
            class="w-full !bg-green-700 h-10 opacity-[0.7] !transition-all !rounded-md hover:!bg-gray-700"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
