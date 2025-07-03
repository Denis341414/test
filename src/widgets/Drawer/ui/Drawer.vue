<script setup lang="ts">
import { Button, Drawer } from "primevue";
import { MenuBar } from "@features/MenuBar";
import { useDrawerStore } from "../model";
import { storeToRefs } from "pinia";
import ButtonDrawer from "./button-drawer.vue";

const { visible } = storeToRefs(useDrawerStore());
</script>

<template>
  <div class="card flex justify-center fixed z-999">
    <Drawer
      v-model:visible="visible"
      header="Menu"
      class="drawer relative !bg-green-700 opacity-[0.9] !shadow-2xl !shadow-cyan-500/50 !p-6 gap-10"
    >
      <MenuBar />
    </Drawer>

    <ButtonDrawer />
  </div>
</template>

<style scoped></style>
