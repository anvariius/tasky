import { ITask } from "../../types";
import TaskTag from "../buttons/TaskTag.tsx";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function TaskCard({ task }: { task: ITask }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="flex flex-col justify-between bg-gray rounded-3xl p-5"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="font-medium h-14">{task.name}</div>
      {task.tag && <TaskTag name={task.tag} />}
    </div>
  );
}
