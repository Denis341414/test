<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <div
    class="!bg-green-800 header w-full h-16 !text-gray-500 font-bold flex justify-center items-center z-50 border-b-3 text-3xl fixed"
  >
    {{ router.name }}
  </div>
</template>

<style scoped></style>
