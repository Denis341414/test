<script setup lang="ts">
import { Drawer, useDrawerStore } from "@widgets/Drawer";
import { Header } from "@widgets/Header";

import { useRoute } from "vue-router";
const date = new Date().getMonth();

const router = useRoute();
console.log(date + 1);
</script>

<template>
  <div class="">
    <Header v-if="router.name !== 'auth' && router.name !== 'regist'" />
    <Drawer v-if="router.name !== 'auth' && router.name !== 'regist'" />
    <div
      class="transition-all !pt-18 !p-8"
      :class="useDrawerStore().visible === true ? '!blur-sm' : ''"
    >
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <div class="">
            <component :is="Component" />
          </div>
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
@media (max-width: 1500px) {
}
</style>
