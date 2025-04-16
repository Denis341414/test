import { ApiClient, EndpointsEnum } from "@shared/api";
import { ITask } from "@shared/types";
import { validateTask } from "@shared/utils/validate/validate-task";

export const addInMyTask = async (title: string, text: string) => {
  if (validateTask(title, text)) {
    console.log(validateTask(title, text));
  } else {
    const data = await ApiClient<ITask>({
      url: `${EndpointsEnum.MYTASKS}`,
      method: "POST",
      data: {
        id: Date.now(),
        title,
        text,
        status: "не выполнено",
      },
    });

    console.log(data);
  }
};
