<script setup lang="ts">
import { useUserProfileStore } from "@entities/userProfile";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Line } from "vue-chartjs";

const { userCurrent, myTasks, myCompletedTasks } = storeToRefs(
  useUserProfileStore()
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: <string[]>[],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#fff",
      borderColor: "#E46651",
      data: <number[]>[],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: "#fff",
      },
      grid: {
        color: "#fff",
      },
    },
    y: {
      grid: {
        color: "#fff",
      },
      ticks: {
        color: "#fff",
      },
    },
  },
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

const formatDate = (date: string) => {
  return Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date(new Date().getFullYear(), Number(date) + 1, 1));
};

function getMonthNumberFromName(monthName: string) {
  const year = new Date().getFullYear();
  console.log(new Date(`${monthName} 1, ${year}`).getMonth() + 1);
  return new Date(`${monthName} 1, ${year}`).getMonth() + 1;
}

const getData = () => {
  for (let i of data.labels) {
    const counter = ref(0);
    for (let j of myTasks.value) {
      if (getMonthNumberFromName(formatDate(j.id)) >= Number(formatDate(i))) {
        counter.value++;
        console.log(counter.value);
      }
    }
    console.log(counter.value);
    data.datasets[0].data.push(counter.value);
  }
};
onMounted(() => {
  const month = new Date().getMonth();
  for (let i = month - 7; i < month; i++) {
    let currentMonth = Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(new Date(new Date().getFullYear(), i + 1, 1));

    data.labels.push(currentMonth);
  }
  getData();
});
</script>

<template>
  <Line id="line-chart" :data="data" :options="options" />
</template>

<style scoped></style>
