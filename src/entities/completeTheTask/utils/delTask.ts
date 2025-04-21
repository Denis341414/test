import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const deleteTask = async (id: string) => {
  try {
    await ApiClient<ResponseType>({
      url: `${EndpointsEnum.TASKS}/${id}`,
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
