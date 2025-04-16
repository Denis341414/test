import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const completedTheTask = async (tasks: ITask[], task: ITask) => {
  tasks.push(task);
  await ApiClient<ResponseType>({
    url: `${EndpointsEnum.COMPLETETASKS}`,
    method: "POST",
    data: {
      id: Date.now(), // использовать Date + id пользователя в конкатенации
      title: task.title,
      text: task.text,
      status: task.status,
    },
  });
  console.log(tasks);
  console.log(task);
};
