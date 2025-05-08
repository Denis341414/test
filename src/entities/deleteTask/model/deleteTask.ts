import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const deleteTask = async (
  task: ITask,
  tasks: ITask[],
  endpoint: string
) => {
  try {
    tasks.splice(tasks.indexOf(task), 1);
    console.log(tasks);
    await ApiClient<ResponseType>({
      url: `${endpoint}/${task.id}`,
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error:", error);
  }
};
