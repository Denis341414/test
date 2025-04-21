import { ApiClient } from "@shared/api";
import { EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const getAllTasks = async () => {
  const tasks = await ApiClient<ITask[]>({
    url: `${EndpointsEnum.TASKS}`,
    method: "GET",
  }).then((res) => {
    return res.data;
  });

  return { tasks };
};
