export interface ITag {
  name: string;
  color?: string;
}

export type Id = string | number;

export enum TaskStatus {
  ACTIVE,
  DONE,
  REMOVED,
}

export interface ITask {
  id: number | string;
  userId: number;
  name: string;
  description: string | null;
  tag: ITag | null;
  isImportant: boolean;
  date: string;
  status: TaskStatus;
}

export interface ISortedTasks {
  [key: string]: ITask[];
}

export interface ITaskStats {
  activeTasks: number | null;
  doneTasks: number | null;
  expiredTasks: number | null;
}
