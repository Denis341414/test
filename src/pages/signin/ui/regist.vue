<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
import { storeToRefs } from "pinia";
import { useRegistStore } from "../model";
import { registUser } from "@entities/registUser/model/registUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserProfileStore } from "@entities/userProfile";
import { useRouter } from "vue-router";

const { email, password, repeatPassword, name } = storeToRefs(useRegistStore());
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
  } else {
  }
});
</script>

<template>
  <div
    class="cont-auth flex flex-col justify-center items-center h-[100%] !p-8 gap-6"
  >
    <div class="inputs flex justify-center items-center flex-col gap-2">
      <inputData
        :lable="'name'"
        :placeholder="'Как вас зовут?'"
        :type="'text'"
        v-model="name"
      />
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
        :func="() => registUser(email, password, repeatPassword, name, auth)"
      />
      <router-link to="auth">
        <ButtonSignIn :lable="'Вход'" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
