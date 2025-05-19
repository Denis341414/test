<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
import { storeToRefs } from "pinia";
import { useRegistStore } from "../model";

const { email, password, repeatPassword } = storeToRefs(useRegistStore());
</script>

<template>
  <div
    class="cont-auth flex flex-col justify-center items-center h-[100%] !p-8 gap-6"
  >
    <div class="inputs flex justify-center items-center flex-col gap-2">
      <inputData
        :lable="'email'"
        :placeholder="'Вводите сюда)'"
        :type="'text'"
        :data="email"
      />
      <inputData
        :lable="'password'"
        :placeholder="'и сюда)))'"
        :type="'password'"
        :data="password"
      />
      <inputData
        :lable="'repeat password'"
        :placeholder="'x)'"
        :type="'password'"
        :data="repeatPassword"
      />
    </div>

    <div class="buttons flex flex-col">
      <ButtonSignIn :lable="'Зарегистрироваться'" />
      <router-link to="auth">
        <ButtonSignIn :lable="'Вход'" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
