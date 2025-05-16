<script setup lang="ts">
import { Button } from "primevue";

const props = defineProps<{
  lable?: string;
}>();
</script>

<template>
  <Button
    class="!p-1 !px-4 !rounded-sm !transition-all !w-[10vw] hover:!bg-green-600"
    >{{ props.lable }}</Button
  >
</template>

<style scoped></style>
