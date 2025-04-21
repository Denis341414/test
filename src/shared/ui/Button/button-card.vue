<script setup lang="ts">
import { Button } from "primevue";

const props = defineProps<{
  func?: () => void;
  label: string;
}>();
</script>

<template>
  <Button
    :label="label"
    severity="secondary"
    outlined
    type="button"
    @click="func"
    class="w-full !bg-gray-500 opacity-[0.7] !transition-all !rounded-md hover:!bg-gray-700"
  />
</template>

<style scoped></style>
