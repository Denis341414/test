import { ApiClient } from "@shared/api";
import { EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const getMyTasks = async (uidUser: string) => {
  const myTasks = await ApiClient<ITask[]>({
    url: `${EndpointsEnum.TASKS}`,
    method: "GET",
  }).then((res) => {
    return res.data;
  });

  return myTasks.filter((el) => {
    if (el.uidUser === uidUser) {
      return el;
    }
  });
};
