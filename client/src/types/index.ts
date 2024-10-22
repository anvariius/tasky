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
  tag?: ITag;
  isImportant: boolean;
  date: string;
  status: TaskStatus;
}

export interface ISortedTasks {
  [key: string]: ITask[];
}
