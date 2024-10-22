import { ISortedTasks, TaskStatus } from "../types";

//
export const taskList: ISortedTasks = {
  1728432000000: [
    {
      id: "task1",
      userId: 1,
      position: 1,
      name: "Выучить реакт",
      description: null,
      tag: {
        name: "programming",
        color: "orange",
      },
      isImportant: false,
      date: "2024-10-09",
      status: TaskStatus.ACTIVE,
    },
    {
      id: "task2",
      userId: 1,
      name: "Пробежка",
      description: null,
      tag: {
        name: "sport",
        color: "pink",
      },
      isImportant: false,
      date: "2024-10-09",
      status: TaskStatus.ACTIVE,
    },
  ],
  1728518400000: [
    {
      id: "task3",
      userId: 1,
      name: "запилить функцию",
      description: null,
      tag: {
        name: "work",
        color: "yellow",
      },
      isImportant: false,
      date: "2024-10-10",
      status: TaskStatus.ACTIVE,
    },
    {
      id: "task4",
      userId: 1,
      name: "Отжимания",
      description: null,
      tag: {
        name: "sport",
        color: "purple",
      },
      isImportant: false,
      date: "2024-10-10",
      status: TaskStatus.ACTIVE,
    },
  ],
};
