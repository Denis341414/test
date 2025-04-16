<script setup lang="ts">
import { addInMyTask } from "@features/addInMyTask";
import { Textarea, Button } from "primevue";
import { ref } from "vue";

const title = ref("");
const text = ref("");
// const status = ref("не начато");
</script>

<template>
  <div
    class="form-create-task flex flex-col justify-center items-start gap-2 !m-6"
  >
    <Textarea
      class="!bg-red-400 !px-10 !py-3 w-[23vw] !rounded-lg"
      placeholder="Введите название задачи"
      v-model="title"
    />
    <Textarea
      class="!bg-red-400 h-3= !px-10 !py-3 w-[23vw] h-40 !rounded-lg"
      placeholder="Введите текст задачи"
      v-model="text"
    />
    <Button
      class="!bg-green-500 !px-6 !py-2 !rounded-md hover:!bg-green-700 !transition"
      @click="addInMyTask(title, text)"
      >Создать</Button
    >
  </div>
</template>
