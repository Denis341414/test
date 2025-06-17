<script setup lang="ts">
import { useUserProfileStore } from "@entities/userProfile";
import { storeToRefs } from "pinia";
const { userCurrent, myTasks, myCompletedTasks } = storeToRefs(
  useUserProfileStore()
);
import pieChart from "./pie-chart.vue";
import { onMounted } from "vue";
import { getMyTasks } from "@entities/getMyTasks";
import { getCompletedTasks } from "@entities/getCompletedTasks";

onMounted(async () => {
  myTasks.value = await getMyTasks(userCurrent.value.uid);
  myCompletedTasks.value = (await getCompletedTasks()).filter(
    (el) => el.id === userCurrent.value.uid
  );
});
</script>

<template>
  <div class="container !p-20 flex gap-4">
    <div
      class="card-user flex flex-col gap-10 !p-10 !bg-green-700 opacity-80 rounded-2xl"
    >
      <div class="card-user-img">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          height="200px"
          width="200px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
          ></path>
        </svg>
      </div>
      <div class="card-user-inf">
        <div class="card-user-name">{{ userCurrent.displayName }}</div>
        <div class="card-user-position">Web Developer</div>
        <div class="card-user-phone">08123456789</div>
        <div class="card-user-email">{{ userCurrent.email }}</div>
      </div>
    </div>
    <div
      class="container-information !p-10 flex-1 !bg-green-700 opacity-70 rounded-2xl"
    >
      <div class="statistics">
        <div class="inf-completed-tasks">Выполнено задач: 9999999</div>
        <div class="inf-active-tasks">Активные задачи: 9999999</div>
        <div class="inf-activity">Активность: 9999999</div>
        <div class="inf-last-task-completion-time">
          Время последнего выполнения: 9999999
        </div>
      </div>
      <div class="chart-js">
        <pieChart />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
