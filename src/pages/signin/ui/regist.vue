<script setup lang="ts">
import { ButtonSignIn, inputData } from "@shared/ui";
import { storeToRefs } from "pinia";
import { useRegistStore } from "../model";
import { registUser } from "@entities/registUser/model/registUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserProfileStore } from "@entities/userProfile";
import { useRouter } from "vue-router";
import { ProgressSpinner } from "primevue";
import { ref } from "vue";

const { email, password, repeatPassword, name } = storeToRefs(useRegistStore());
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
  } else {
  }
});
const regUser = async () => {
  await registUser(
    email.value,
    password.value,
    repeatPassword.value,
    name.value,
    auth,
    loader
  );
};
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
      <ProgressSpinner
        v-if="loader"
        style="width: 50px; height: 50px"
        strokeWidth="8"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
      <ButtonSignIn
        v-else
        :lable="'Зарегистрироваться'"
        :func="() => regUser()"
      />
      <router-link to="auth">
        <ButtonSignIn :lable="'Вход'" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
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
