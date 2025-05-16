<script setup lang="ts">
import { Drawer, useDrawerStore } from "@widgets/Drawer";
import { Header } from "@widgets/Header";
import { useRoute, useRouter } from "vue-router";

const router = useRoute();
console.log(router.path);
</script>

<template>
  <Header v-if="router.name !== 'auth' && router.name !== 'regist'" />
  <Drawer v-if="router.name !== 'auth' && router.name !== 'regist'" />
  <div
    class="cont transition-all !pt-18 !p-8"
    :class="useDrawerStore().visible === true ? '!blur-sm' : ''"
  >
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
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
</style>
