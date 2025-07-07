<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import { getMyTasks } from "@entities/getMyTasks";
import { getCompletedTasks } from "@entities/getCompletedTasks";
import { Doughnut } from "vue-chartjs";

import { useUserProfileStore } from "@entities/userProfile";
import { storeToRefs } from "pinia";
const { userCurrent, myTasks, myCompletedTasks } = storeToRefs(
  useUserProfileStore()
);

const loader = ref(false);

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  DoughnutController,
  CategoryScale,
  LinearScale
);

const chartData = reactive({
  labels: ["выполненные", "в процессе"],
  datasets: [
    {
      backgroundColor: ["#41B883", "#E46651"],
      data: [0, 1],
    },
  ],
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#fff",
        font: {
          size: 14,
        },
        padding: 20,
      },
    },
  },
};

const updateChartData = () => {
  chartData.datasets[0].data = [
    myCompletedTasks.value.length,
    myTasks.value.length,
  ];
};

onMounted(async () => {
  loader.value = false;
  try {
    myTasks.value = await getMyTasks(userCurrent.value.uid);
    myCompletedTasks.value = await getCompletedTasks();
    console.log("Мои задания:", myTasks.value);
    console.log("Завершенные задания:", myCompletedTasks.value);
    updateChartData();

    loader.value = true;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
});

watch([myTasks.value, myCompletedTasks.value], updateChartData);
</script>

<template>
  <Doughnut
    v-if="loader"
    id="doughnut-chart"
    :data="chartData"
    :options="options"
  />
</template>

<style scoped></style>
