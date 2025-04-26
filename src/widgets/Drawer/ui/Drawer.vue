<script setup lang="ts">
import { Button, Drawer } from "primevue";
import { MenuBar } from "@widgets/MenuBar";
import { useDrawerStore } from "../model";
import { storeToRefs } from "pinia";

const { visible } = storeToRefs(useDrawerStore());
</script>

<template>
  <div class="card flex justify-center fixed z-999">
    <Drawer
      v-model:visible="visible"
      header="Menu"
      class="relative !bg-linear-65 from-green-500 to-green-900 opacity-[0.9] !shadow-2xl !shadow-cyan-500/50 !p-6 gap-10 text-3xl"
    >
      <MenuBar />
    </Drawer>

    <Button
      icon="pi pi-arrow-right"
      @click="visible = true"
      class="!bg-green-700 w-20 h-10 !absolute -left-[30px] top-[40vh] rotate-90 !rounded-t-3xl"
      label="dasdas"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="20px"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu_Burger">
          <path
            d="M3.563,4.063c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001Z"
          ></path>
          <path
            d="M3.563,12.501c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"
          ></path>
          <path
            d="M3.563,20.939c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"
          ></path>
        </g>
      </svg>
    </Button>
  </div>
</template>

<style scoped></style>
