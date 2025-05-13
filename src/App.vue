<script setup lang="ts">
import { Drawer, useDrawerStore } from "@widgets/Drawer";
import { Header } from "@widgets/Header";
import { useRoute, useRouter } from "vue-router";

const router = useRoute();
console.log(router.path);
</script>

<template>
  <Header v-if="router.name !== 'signin' || router.path !== '/signin/auth'" />
  <Drawer v-if="router.name !== 'signin' || router.path !== '/signin/auth'" />
  <div
    class="cont transition-all !pt-18 !p-8"
    :class="useDrawerStore().visible === true ? 'blur-lg' : ''"
  >
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
