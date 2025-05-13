<script setup lang="ts">
import { Button, Drawer } from "primevue";
import { MenuBar } from "@features/MenuBar";
import { useDrawerStore } from "../model";
import { storeToRefs } from "pinia";
import ButtonDrawer from "./button-drawer.vue";
import { SwitchTheme } from "../utils";
import { ref, watch } from "vue";

const { visible } = storeToRefs(useDrawerStore());
</script>

<template>
  <div class="card flex justify-center fixed z-999">
    <Drawer
      v-model:visible="visible"
      header="Menu"
      class="drawer relative !bg-green-700 opacity-[0.9] !shadow-2xl !shadow-cyan-500/50 !p-6 gap-10 text-3xl"
    >
      <MenuBar />
      <Button
        @click="SwitchTheme"
        class="flex w-full !justify-start !border-4 !mt-6 !border items-center cursor-pointer text-surface-700 !transition-all duration-300 !px-10 !py-2 dark:text-surface-0 hover:!bg-gray-700"
      >
        Switch Theme
      </Button>
    </Drawer>

    <ButtonDrawer />
  </div>
</template>

<style scoped></style>
