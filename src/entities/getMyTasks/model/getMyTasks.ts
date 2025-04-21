import { ApiClient } from "@shared/api";
import { EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const getMyTasks = async () => {
  const myTasks = await ApiClient<ITask[]>({
    url: `${EndpointsEnum.MYTASKS}`,
    method: "GET",
  }).then((res) => {
    return res.data;
  });

  return { myTasks };
};
