import TaskCard from "../cards/TaskCard.tsx";
import { getDate, getDay } from "../../utils/utils.ts";
import { ITask } from "../../types";
import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

export default function CalendarTaskList({
  date,
  tasks,
}: {
  date: number;
  tasks: ITask[] | undefined;
}) {
  const { setNodeRef } = useDroppable({ id: date });
  const isToday = date === new Date().setHours(0, 0, 0, 0);
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col justify-center items-center">
        <div className={`font-bold text-6xl ${isToday && "text-orange"}`}>
          {getDate(date)}
        </div>
        <div className={`font-light text-lg ${isToday && "text-orange"}`}>
          {getDay(date)}
        </div>
      </div>
      <SortableContext
        id={date.toString()}
        items={tasks ? tasks.map((t) => t.id) : []}
        strategy={rectSortingStrategy}
      >
        <div className="flex flex-col gap-y-4 min-h-64" ref={setNodeRef}>
          {tasks &&
            tasks.map((task) => <TaskCard key={task.name} task={task} />)}
        </div>
      </SortableContext>
    </div>
  );
}
