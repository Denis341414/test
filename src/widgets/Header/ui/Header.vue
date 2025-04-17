<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <div
    class="header w-full h-16 !text-green-700 flex justify-center items-center border-b-green-600 border-b-3 text-3xl"
  >
    {{ router.name }}
  </div>
</template>

<style scoped></style>
