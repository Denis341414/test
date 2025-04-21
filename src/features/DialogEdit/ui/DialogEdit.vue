<script setup lang="ts">
import { Dialog, InputText, Textarea } from "primevue";
import { useDialogEditStore } from "../model";
import { storeToRefs } from "pinia";
import { ButtonCard } from "@shared/ui";

const { visibleDialog, ID } = storeToRefs(useDialogEditStore());

const props = defineProps<{ id?: string }>();

const showDialog = () => {
  visibleDialog.value = true;
  ID.value = props.id;
};
</script>

<template>
  <ButtonCard :label="'Редактировать'" :func="showDialog" />

  <Dialog
    v-model:visible="visibleDialog"
    modal
    header="Edit Task"
    :style="{ width: '25rem' }"
    class="!bg-green-600 !p-8 h-[40vh] !w-[30vw] !rounded-3xl text-3xl"
  >
    <div class="container flex !h-[100%] flex-col gap-6 items-center">
      <p>id: {{ ID }}</p>
      <InputText type="text" class="!bg-red-400" />
      <Textarea type="text" class="!bg-red-400" />
      <ButtonCard
        :label="'Save'"
        :func="
          () => {
            console.log(1);
          }
        "
      />
    </div>
  </Dialog>
</template>

<style scoped></style>
