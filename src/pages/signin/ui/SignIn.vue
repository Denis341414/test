<script setup lang="ts">
import { Transition } from "vue";
</script>

<template>
  <div class="container flex justify-center items-center">
    <div class="container-signin bg-green-700 w-[20vw] h-[55vh] rounded-xl">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (max-width: 1025px) {
  .container-signin {
    width: 30vw;
  }
}

@media (max-width: 800px) {
  .container-signin {
    width: 40vw;
    height: 50vh;
  }
}

@media (max-width: 600px) {
  .container-signin {
    width: 70vw;
    height: 40vh;
  }
}

@media (max-width: 400px) {
  .container-signin {
    width: 100vw;
    height: 60vh;
  }
}
</style>
