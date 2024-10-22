import TaskCard from "../cards/TaskCard.tsx";
import { getDate, getDay } from "../../utils/utils.ts";
import { ITask } from "../../types";
import NewTaskCard from "../cards/NewTaskCard.tsx";

export default function CalendarTaskList({
  date,
  tasks,
  dragStart,
  dragEnd,
  changeTask,
  addTask,
  removeTask,
}: {
  date: number;
  tasks: ITask[] | undefined;
  dragStart: Function;
  dragEnd: Function;
  changeTask: Function;
  addTask: () => void;
  removeTask: Function;
}) {
  const isToday = date === new Date().setHours(0, 0, 0, 0);
  return (
    <div className="flex flex-col gap-y-4 group">
      <div className="flex flex-col justify-center items-center">
        <div className={`font-bold text-6xl ${isToday && "text-orange"}`}>
          {getDate(date)}
        </div>
        <div className={`font-light text-lg ${isToday && "text-orange"}`}>
          {getDay(date)}
        </div>
      </div>
      <div
        className="flex flex-col gap-y-4 min-h-64"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => dragEnd(date, e.target)}
      >
        {tasks &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              date={date}
              dragStart={dragStart}
              changeTask={changeTask}
              removeTask={removeTask}
            />
          ))}
        <div className="opacity-0 group-hover:opacity-100 transition duration-500">
          <NewTaskCard onClick={addTask} />
        </div>
      </div>
    </div>
  );
}
