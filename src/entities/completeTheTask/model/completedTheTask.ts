import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";
import { deleteTask } from "@entities/deleteTask";

export const completedTheTask = async (
  task: ITask,
  tasksNow: ITask[],
  uidUser: string
) => {
  try {
    await ApiClient<ResponseType>({
      url: `${EndpointsEnum.COMPLETETASKS}`,
      method: "POST",
      data: {
        id: String(Date.now()),
        title: task.title,
        text: task.text,
        status: task.status,
        importance: task.importance,
        uidUser: uidUser,
      },
    });
    // tasksNow.splice(tasksNow.indexOf(task), 1);
    await deleteTask(task, tasksNow, EndpointsEnum.TASKS);
    console.log(task);
  } catch (error) {
    console.log(error);
  }
};
