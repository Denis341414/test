<script setup lang="ts">
import { RadioButton } from "primevue";
import { ref } from "vue";

const importanceItem = ref("");
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="importanceItem"
        inputId="importance1"
        name="importance"
        value="important"
      />
      <label for="ingredient1">important</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="importanceItem"
        inputId="importance2"
        name="importance"
        value="urgent"
      />
      <label for="ingredient2">urgent</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="importanceItem"
        inputId="importance3"
        name="importance"
        value="insignificant"
      />
      <label for="ingredient3">insignificant</label>
    </div>
  </div>
</template>

<style scoped></style>
