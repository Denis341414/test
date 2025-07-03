import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

const updateTasks = async (item: ITask | undefined) => {
  try {
    await ApiClient<ResponseType>({
      url: `${EndpointsEnum.TASKS}/${item?.id}`,
      method: "PUT",
      data: item,
    });
  } catch (err) {
    console.log(err);
  }
};

export const onDrop = async (
  event: DragEvent,
  list: string,
  tasks: ITask[]
) => {
  const itemID = event.dataTransfer?.getData("itemID");
  const item = tasks.find((el) => el.id === itemID);
  if (item) {
    item.importance = list;
    await updateTasks(item);
  }
};

export const dragStart = (event: DragEvent, item: ITask) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData("itemID", String(item.id));
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
  }
};
