<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../model";
import { authUser } from "@entities/authUser";
import { getAuth } from "firebase/auth";
import { useUserProfileStore } from "@entities/userProfile";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

const { email, password } = storeToRefs(useAuthStore());
const { userCurrent } = storeToRefs(useUserProfileStore());
const router = useRouter();
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    userCurrent.value = user;
    localStorage.setItem("userCurrent", JSON.stringify(user));
    localStorage.setItem("userUID", user.uid);
    console.log(userCurrent);
    router.push("/profile");
  }
});
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
