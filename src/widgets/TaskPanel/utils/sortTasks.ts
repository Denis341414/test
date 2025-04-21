import { ITask } from "@shared/types";

export const sortTasks = (
  allTasks: ITask[],
  impTasks: ITask[],
  urgTasks: ITask[],
  insignTasks: ITask[]
) => {
  for (let el of allTasks) {
    switch (el.importance) {
      case "important":
        impTasks.push(el);
        break;
      case "Urgent":
        urgTasks.push(el);
        break;
      case "Insignificant":
        insignTasks.push(el);
        break;
    }
  }
};
