import { useTasksStore } from "@entities/Tasks/model/tasksStore";
import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";
import { validateTask } from "@shared/utils";
export const addInMyTask = async (
  title: string,
  text: string,
  importance: string,
  uid: string,
  tasks: ITask[]
) => {
  if (validateTask(title, text)) {
    console.log(validateTask(title, text));
  } else {
    const data = await ApiClient<ITask>({
      url: `${EndpointsEnum.TASKS}`,
      method: "POST",
      data: {
        id: String(Date.now()),
        title: title,
        text: text,
        status: "не выполнено",
        importance: importance,
        uidUser: uid,
      },
    }).then((response) => {
      tasks.push(response.data);
      return response.data;
    });

    title = "";
    text = "";
  }
};
