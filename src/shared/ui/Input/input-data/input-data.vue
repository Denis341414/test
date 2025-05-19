<script setup lang="ts">
import { InputText } from "primevue";

const props = defineProps<{
  lable?: string;
  placeholder?: string;
  data?: string;
  type?: string;
}>();
</script>

<template>
  <p class="text-sm uppercase">{{ props.lable }}</p>
  <InputText
    :name="props.lable"
    :placeholder="props.placeholder"
    v-model="props.data"
    :type="props.type"
    class="!bg-green-500 !rounded-sm w-[110%] !h-[2em] !p-2"
  />
</template>

<style scoped></style>
