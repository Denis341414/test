<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
</script>

<template>
  <div
    class="cont-auth flex flex-col justify-center items-center h-[100%] !p-8 gap-6"
  >
    <div class="inputs flex justify-center items-center flex-col gap-2">
      <inputData :lable="'email'" :placeholder="'Вводите сюда)'" />
      <inputData :lable="'password'" :placeholder="'и сюда)))'" />
    </div>

    <div class="buttons flex flex-col">
      <ButtonSignIn :lable="'Войти'" />
      <router-link to="regist">
        <ButtonSignIn :lable="'Регистрация'" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
