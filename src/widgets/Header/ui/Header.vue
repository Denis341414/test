<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <div
    class="header !bg-green-600 opacity-90 header w-full h-22 !text-gray-300 font-bold flex justify-center items-center z-50 border-b-18 text-3xl fixed rounded-b-4xl transition-all hover:border-b-6"
  >
    {{ router.name }}
  </div>
</template>

<style scoped></style>
