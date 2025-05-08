<script setup lang="ts">
import { RadioButton } from "primevue";
import { ref, watch } from "vue";
import { useFormTaskStore } from "../model";
import { storeToRefs } from "pinia";

const { importanceItem } = storeToRefs(useFormTaskStore());

watch(importanceItem, () => {
  console.log(importanceItem.value);
});
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="importanceItem"
        inputId="importance1"
        name="importance"
        value="important"
        class="!bg-green-500 !w-4 !h-4 rounded-3xl"
        :class="importanceItem === 'important' ? '!bg-green-700' : ''"
      />
      <label for="ingredient1">important</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="importanceItem"
        inputId="importance2"
        name="importance"
        value="urgent"
        class="!bg-green-500 !w-4 !h-4 rounded-3xl"
        :class="importanceItem === 'urgent' ? '!bg-green-700' : ''"
      />
      <label for="ingredient2">urgent</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="importanceItem"
        inputId="importance3"
        name="importance"
        value="insignificant"
        class="!bg-green-500 !w-4 !h-4 rounded-3xl"
        :class="importanceItem === 'insignificant' ? '!bg-green-700' : ''"
      />
      <label for="ingredient3">insignificant</label>
    </div>
  </div>
</template>

<style scoped></style>
