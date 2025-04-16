export const validateTask = (title: string, text: string) => {
  if (!title) {
    return "Введите название задачи";
  } else if (!text) {
    return "Введите описание задачи";
  } else {
    return false;
  }
};
