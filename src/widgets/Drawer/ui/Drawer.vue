<script setup lang="ts">
import { Button, Drawer } from "primevue";
import { ref } from "vue";

const visible = ref(false);
</script>

<template>
  <div class="card flex justify-center">
    <Drawer
      v-model:visible="visible"
      header="Drawer"
      class="!bg-fuchsia-200 relative"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Drawer>
    <Button
      icon="pi pi-arrow-right"
      @click="visible = true"
      class="!bg-red-400 w-11 h-11 !absolute left-0 top-[50vh]"
      label="dasdas"
    />
  </div>
</template>

<style scoped></style>
