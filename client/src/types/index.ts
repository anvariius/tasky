export interface ITag {
  name: string;
  color?: string;
}

export enum TaskStatus {
  ACTIVE,
  DONE,
  REMOVED,
}

export enum DragActions {
  DragOver,
  DragEnd,
}

export interface ITask {
  id: number | string;
  userId: number;
  position: number;
  folderId: number | null;
  parentId: number | null;
  name: string;
  description: string | null;
  tag?: string;
  isImportant: boolean;
  date: string;
  status: TaskStatus;
}

export interface ISortedTasks {
  [key: string]: ITask[];
}
