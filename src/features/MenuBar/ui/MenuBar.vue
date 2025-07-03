<script setup lang="ts">
import { PanelMenu } from "primevue";
import { keyMenu } from "../model";
</script>

<template>
  <PanelMenu :model="keyMenu" class="!gap-6 shadow-sm text-sm overflow-hidden">
    <template #item="{ item }" class="">
      <router-link
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
        class="!shadow-2xl"
      >
        <a
          class="flex items-center cursor-pointer text-surface-700 !transition-all duration-300 !px-10 !py-2 dark:text-surface-0 bg-gray-600 hover:bg-gray-500"
          :href="href"
          @click="navigate"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
  </PanelMenu>
</template>

<style scoped></style>
