<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../model";
import { authUser } from "@entities/authUser";
import { getAuth } from "firebase/auth";
import { useUserProfileStore } from "@entities/userProfile";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { ProgressSpinner } from "primevue";
import { ref } from "vue";

const { email, password } = storeToRefs(useAuthStore());
const { userCurrent } = storeToRefs(useUserProfileStore());
const router = useRouter();
const auth = getAuth();
const loader = ref(false);

onAuthStateChanged(auth, (user) => {
  if (user) {
    userCurrent.value = user;
    localStorage.setItem("userCurrent", JSON.stringify(user));
    localStorage.setItem("userUID", user.uid);
    console.log(userCurrent);
    router.push("/profile");
  }
});

const auUser = async () => {
  await authUser(email.value, password.value, auth, loader);
};
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
      <ProgressSpinner
        v-if="loader"
        style="width: 50px; height: 50px"
        strokeWidth="8"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
      <ButtonSignIn v-else :lable="'Войти'" :func="() => auUser()" />
      <router-link to="regist">
        <ButtonSignIn :lable="'Регистрация'" />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
