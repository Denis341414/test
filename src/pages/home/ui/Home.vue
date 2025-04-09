<script setup lang="ts">
import { Card } from "@entities/Card";
import { getMyTasks } from "@features/getMyTasks";
import { ITask } from "@shared/types";
import { onMounted, ref } from "vue";
const myTasks = ref<ITask>();

onMounted(() => {
  myTasks.value = getMyTasks();
});
</script>

<template>
  <div class="container !p-10 !grid grid-cols-4 gap-16">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style scoped></style>
