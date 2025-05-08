import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";
import { validateTask } from "@shared/utils";

export const addInMyTask = async (
  title: string,
  text: string,
  importance: string,
  tasks: ITask[]
) => {
  if (validateTask(title, text)) {
    console.log(validateTask(title, text));
  } else {
    const data = await ApiClient<ITask>({
      url: `${EndpointsEnum.TASKS}`,
      method: "POST",
      data: {
        id: String(Date.now()),
        title: title,
        text: text,
        status: "не выполнено",
        importance: importance,
      },
    }).then((response) => {
      return response.data;
    });
    title = "";
    text = "";

    tasks.push(data);
    console.log(tasks);
    console.log(data);
  }
};
