import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";

export const deleteTask = async (
  task: ITask,
  tasks: ITask[],
  endpoint: string
) => {
  try {
    console.log(tasks);
    await ApiClient<ResponseType>({
      url: `${endpoint}/${task.id}`,
      method: "DELETE",
    });

    tasks.splice(tasks.indexOf(task), 1);
  } catch (error) {
    console.error("Error:", error);
  }
};
