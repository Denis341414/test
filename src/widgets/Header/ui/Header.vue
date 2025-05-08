<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <div
    class="!bg-[#919191e4] header w-full h-16 !text-green-700 flex justify-center items-center z-50 border-b-green-600 border-b-3 text-3xl fixed"
  >
    {{ router.name }}
  </div>
</template>

<style scoped></style>
