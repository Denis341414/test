<script setup lang="ts">
import { Dialog, Button, Textarea } from "primevue";
import { useDialogEditStore } from "../model";
import { storeToRefs } from "pinia";
import { ButtonCard } from "@shared/ui";
import { editTask } from "@entities/editTask/model/editTask";
import { ITask } from "@shared/types";

const { visibleDialog, ID, titleEdit, textEdit, importanceEdit } = storeToRefs(
  useDialogEditStore()
);

const props = defineProps<{
  tasks: ITask[];
  id?: string;
  title?: string;
  text?: string;
  importance?: string;
}>();

const showDialog = () => {
  titleEdit.value = props.title;
  textEdit.value = props.text;
  importanceEdit.value = props.importance;
  visibleDialog.value = true;
  ID.value = props.id;
};
</script>

<template>
  <ButtonCard class="!w-[13vw]" :label="'Редактировать'" :func="showDialog" />

  <Dialog
    v-model:visible="visibleDialog"
    modal
    header="Edit Task"
    :style="{ width: '25rem' }"
    class="!bg-green-600 !p-8 h-[50vh] !w-[30vw] !rounded-3xl text-3xl"
  >
    <div class="container flex !h-[100%] flex-col gap-6 items-center">
      <p>{{ ID }}</p>
      <div
        class="form-create-task flex flex-col justify-center items-start gap-2 !m-6"
      >
        <Textarea
          class="!bg-green-800 opacity-[0.7] !px-10 !py-3 w-[23vw] !rounded-lg"
          placeholder="Введите название задачи"
          :default-value="titleEdit"
          v-model="titleEdit"
        />
        <Textarea
          class="!bg-green-800 opacity-[0.7] !px-10 !py-3 w-[23vw] h-40 !rounded-lg"
          placeholder="Введите текст задачи"
          :default-value="textEdit"
          v-model="textEdit"
        />
        <Button
          class="!bg-green-600 !px-8 !py-2 !rounded-md hover:!bg-green-700 !transition"
          @click="
            editTask(
              {
                id: ID,
                title: titleEdit,
                text: textEdit,
                status: 'не начато',
                importance: importanceEdit,
              },
              () => {
                visibleDialog = false;
              },
              props.tasks,
              ID
            )
          "
          >Сохранить</Button
        >
      </div>
    </div>
  </Dialog>
</template>

<style scoped></style>
