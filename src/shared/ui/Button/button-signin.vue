<script setup lang="ts">
import { Button } from "primevue";

const props = defineProps<{
  lable?: string;
  func?: () => void;
}>();
</script>

<template>
  <Button
    class="btn-signin !p-1 !px-4 !rounded-sm !transition-all w-[10vw] hover:!bg-green-600"
    @click="props.func"
    >{{ props.lable }}</Button
  >
</template>

<style scoped>
@media (max-width: 500px) {
  .btn-signin {
    width: 80vw !important;
  }
}
</style>
