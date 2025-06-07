import { ApiClient } from "@shared/api";
import { EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const getMyTasks = async (uidUser: string): Promise<ITask[]> => {
  const arr = await ApiClient<ITask[]>({
    url: `${EndpointsEnum.TASKS}`,
    method: "GET",
  }).then((res) => {
    return res.data;
  });
  const myTasks = arr.filter((el) => el.uidUser === uidUser);
  return myTasks;
};
