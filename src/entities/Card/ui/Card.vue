<script setup lang="ts">
import { Button, Card } from "primevue";
</script>

<template>
  <div class="card">
    <Card
      style="width: 20rem; overflow: hidden"
      class="!bg-red-800 !p-8 !text-center !rounded-xl"
    >
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button
            label="Удалить"
            severity="secondary"
            outlined
            class="w-full"
          />
          <Button label="Завершить" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped></style>
