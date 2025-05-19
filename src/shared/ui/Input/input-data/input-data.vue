<script setup lang="ts">
import { InputText } from "primevue";

const props = defineProps<{
  lable?: string;
  placeholder?: string;
  type?: string;
}>();

const data = defineModel();
</script>

<template>
  <p class="text-sm uppercase">{{ props.lable }}</p>
  <input
    :name="props.lable"
    :placeholder="props.placeholder"
    v-model="data"
    :type="props.type"
    class="!bg-green-500 !rounded-sm w-[110%] !h-[2em] !p-2"
  />
</template>

<style scoped></style>
