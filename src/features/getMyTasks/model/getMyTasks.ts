import { ApiClient } from "@shared/api";
import { EndpointsEnum } from "@shared/api";

export const getMyTasks = async () => {
  const { myTaks } = await ApiClient({
    url: `${EndpointsEnum}`,
    method: "GET",
    data: {},
  });

  return { myTaks };
};
