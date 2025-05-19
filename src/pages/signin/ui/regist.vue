<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
import { storeToRefs } from "pinia";
import { useRegistStore } from "../model";
import { registUser } from "@entities/registUser/model/registUser";
import { getAuth } from "firebase/auth";

const { email, password, repeatPassword } = storeToRefs(useRegistStore());

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
        v-model="email"
      />
      <inputData
        :lable="'password'"
        :placeholder="'и сюда)))'"
        :type="'password'"
        v-model="password"
      />
      <inputData
        :lable="'repeat password'"
        :placeholder="'x)'"
        :type="'password'"
        v-model="repeatPassword"
      />
    </div>

    <div class="buttons flex flex-col">
      <ButtonSignIn
        :lable="'Зарегистрироваться'"
        :func="() => registUser(email, password, repeatPassword, auth)"
      />
      <router-link to="auth">
        <ButtonSignIn :lable="'Вход'" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
