import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";
import { deleteTask } from "../utils";

export const completedTheTask = async (
  tasksCompleted: ITask[],
  task: ITask,
  tasksNow: ITask[]
) => {
  try {
    tasksCompleted.push(task);
    await ApiClient<ResponseType>({
      url: `${EndpointsEnum.COMPLETETASKS}`,
      method: "POST",
      data: {
        id: String(Date.now()), // использовать Date + id пользователя в конкатенации
        title: task.title,
        text: task.text,
        status: task.status,
      },
    });
    tasksNow.splice(tasksNow.indexOf(task), 1);
    await deleteTask(task.id);
    console.log(task);
  } catch (error) {
    console.log(error);
  }
};
