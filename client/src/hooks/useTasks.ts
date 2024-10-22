import { useEffect, useState } from "react";
import { Id, ISortedTasks, ITask, TaskStatus } from "../types";

export const useTasks = () => {
  const lsTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState<ISortedTasks>(
    lsTasks ? JSON.parse(lsTasks) : {},
  );

  const handleTaskDrag = ({
    activeId,
    activeColumn,
    overId,
    overColumn,
  }: {
    [key: string]: Id;
  }) => {
    if (!overColumn) return;

    const updatedTasks = { ...tasks };
    if (!updatedTasks[overColumn]) updatedTasks[overColumn] = [];

    const activeIndex = updatedTasks[activeColumn].findIndex(
      (task) => task.id === activeId,
    );

    const overIndex = overId
      ? updatedTasks[overColumn]?.findIndex((task) => task.id === overId)
      : updatedTasks[overColumn].length;

    const activeTask = updatedTasks[activeColumn][activeIndex];
    updatedTasks[activeColumn].splice(activeIndex, 1);

    updatedTasks[overColumn] = [
      ...updatedTasks[overColumn].slice(0, overIndex),
      activeTask,
      ...updatedTasks[overColumn].slice(
        overIndex,
        updatedTasks[overColumn].length,
      ),
    ];
    setTasks(updatedTasks);
  };

  const updateTaskProperty = <T extends keyof ITask>(
    column: Id,
    taskId: Id,
    property: T,
    value: ITask[T],
  ) => {
    const updatedTasks: ISortedTasks = { ...tasks };
    const task = updatedTasks[column].find((task) => task.id === taskId);
    if (!task) return;
    task[property] = value;
    setTasks(updatedTasks);
  };
  const addNewTask = (column: Id) => {
    const updatedTasks = { ...tasks };
    if (!updatedTasks[column]) updatedTasks[column] = [];
    let maxId = 0;
    Object.values(updatedTasks).forEach((arr: ITask[]) => {
      const maxi = Math.max(...arr.map((task: ITask) => Number(task.id)));
      maxId = maxi > maxId ? maxi : maxId;
    });
    updatedTasks[column].push({
      id: maxId + 1,
      userId: 1,
      name: `new task #${maxId + 1}`,
      description: "",
      isImportant: false,
      tag: null,
      date: new Date().toISOString(),
      status: TaskStatus.ACTIVE,
    });
    setTasks(updatedTasks);
  };
  const removeTask = (column: Id, taskId: Id) => {
    setTasks({
      ...tasks,
      [column]: tasks[column].filter((t) => t.id !== taskId),
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    setTasks,
    handleTaskDrag,
    updateTaskProperty,
    addNewTask,
    removeTask,
  };
};
