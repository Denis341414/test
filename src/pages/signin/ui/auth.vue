<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../model";
import { authUser } from "@entities/authUser";
import { getAuth } from "firebase/auth";
import { watch } from "vue";

const { email, password } = storeToRefs(useAuthStore());
const auth = getAuth();
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
    </div>

    <div class="buttons flex flex-col">
      <ButtonSignIn
        :lable="'Войти'"
        :func="() => authUser(email, password, auth)"
      />
      <router-link to="regist">
        <ButtonSignIn :lable="'Регистрация'" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
