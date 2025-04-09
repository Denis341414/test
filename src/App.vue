<script setup lang="ts">
import { Drawer } from "@widgets/Drawer";
import { Header } from "@widgets/Header";
</script>

<template>
  <Header />
  <Drawer />
  <router-view></router-view>
</template>

<style scoped></style>
