import { useEffect, useState } from "react";
import { ISortedTasks, ITag, ITaskStats, TaskStatus } from "../types";

export const useTasksStats = ({
  tasks,
  today,
}: {
  tasks: ISortedTasks;
  today: number;
}) => {
  const [tasksStats, setTasksStats] = useState<ITaskStats>({
    activeTasks: null,
    doneTasks: null,
    expiredTasks: null,
  });
  const [activeTags, setActiveTags] = useState<ITag[]>([]);

  const calcTodayTasks = (status: TaskStatus) => {
    if (!tasks[today] || !tasks[today].length) return 0;
    return tasks[today].filter((task) => task.status === status).length;
  };

  const calcExpiredTasks = () => {
    if (!Object.keys(tasks)) return null;
    return Object.keys(tasks).reduce((sum, date) => {
      if (Number(date) < today) {
        sum += tasks[date].filter(
          (task) => task.status === TaskStatus.ACTIVE,
        ).length;
      }
      return sum;
    }, 0);
  };

  const findActiveTags = () => {
    return Object.keys(tasks).reduce((tags: ITag[], date) => {
      tasks[date].forEach((task) => {
        if (
          task.status === TaskStatus.ACTIVE &&
          task.tag &&
          !tags.some((tag) => tag.name === task.tag?.name)
        ) {
          tags.push(task.tag);
        }
      });
      return tags;
    }, []);
  };

  useEffect(() => {
    setTasksStats({
      activeTasks: calcTodayTasks(TaskStatus.ACTIVE),
      doneTasks: calcTodayTasks(TaskStatus.DONE),
      expiredTasks: calcExpiredTasks(),
    });

    setActiveTags(findActiveTags());
  }, [tasks]);

  return { tasksStats, activeTags };
};
