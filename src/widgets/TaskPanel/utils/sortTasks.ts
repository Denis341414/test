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
      case "urgent":
        urgTasks.push(el);
        break;
      case "insignificant":
        insignTasks.push(el);
        break;
    }
  }
  console.log(allTasks);
  console.log(impTasks);
  console.log(urgTasks);
  console.log(insignTasks);
};
// export const sortTasks = (
//   allTasks: ITask[],
//   difTasks: ITask[],
// ) => {
//   difTasks.push(...allTasks);
// };
