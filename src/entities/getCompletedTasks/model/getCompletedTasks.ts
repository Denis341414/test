import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const getCompletedTasks = async () => {
  const data = await ApiClient<ITask[]>({
    url: `${EndpointsEnum.COMPLETETASKS}`,
    method: "GET",
  }).then((res) => {
    return res.data;
  });

  return data;
};
