<script setup lang="ts">
import { Drawer, useDrawerStore } from "@widgets/Drawer";
import { Header } from "@widgets/Header";
</script>

<template>
  <Header />
  <Drawer />
  <div
    class="cont transition-all"
    :class="useDrawerStore().visible === true ? 'blur-lg' : ''"
  >
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
