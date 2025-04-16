import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const completedTheTask = async (tasks: ITask[], task: ITask) => {
  tasks.push(task);
  await ApiClient<ResponseType>({
    url: `${EndpointsEnum.COMPLETETASKS}`,
    method: "POST",
    data: task,
  });
  console.log(tasks);
  console.log(task);
};
