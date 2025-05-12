<script setup lang="ts">
import { Drawer, useDrawerStore } from "@widgets/Drawer";
import { Header } from "@widgets/Header";
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <Header v-if="router.name !== 'signin'" />
  <Drawer v-if="router.name !== 'signin'" />
  <div
    class="cont transition-all !pt-18 !p-8"
    :class="useDrawerStore().visible === true ? 'blur-lg' : ''"
  >
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
