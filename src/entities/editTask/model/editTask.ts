import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const editTask = async (
  data: any,
  flagDialogSwitch: () => void,
  tasks: ITask[],
  id?: string
) => {
  try {
    const index = tasks.findIndex((el) => el.id === id);
    console.log(index, id, tasks);

    if (index !== -1) {
      tasks[index].title = data.title;
      tasks[index].text = data.text;
    }
    await ApiClient<ResponseType>({
      url: `${EndpointsEnum.TASKS}/${id}`,
      method: "PUT",
      data: data,
    });

    setTimeout(() => {
      flagDialogSwitch();
    }, 500);
  } catch (error) {
    console.log(error);
  }
};
