import { ITag, ITask, TaskStatus } from "../../types";
import TaskTag from "../buttons/TaskTag.tsx";
import InputCheckbox from "../inputs/InputCheckbox.tsx";
import TaskNameArea from "../inputs/TaskNameArea.tsx";
import { VscTrash, VscFlame } from "react-icons/vsc";
import { useState } from "react";
import TagSelect from "../selects/TagSelect.tsx";

export default function TaskCard({
  task,
  date,
  dragStart,
  changeTask,
  removeTask,
}: {
  task: ITask;
  date: number;
  dragStart: Function;
  changeTask: Function;
  removeTask: Function;
}) {
  const [selectTag, setSelectTag] = useState(false);

  const handleStatusChange = (property: string, value: boolean) => {
    changeTask(
      date,
      task.id,
      property,
      value ? TaskStatus.DONE : TaskStatus.ACTIVE,
    );
  };
  const handleNameChange = (name: string) => {
    if (name) changeTask(date, task.id, "name", name);
  };
  const handleRemoveTask = () => {
    confirm("Вы действительно хотите удалить задачу?") &&
      removeTask(date, task.id);
  };
  const handleTagSelect = (tag: ITag | null) => {
    changeTask(date, task.id, "tag", tag);
    setSelectTag(false);
  };
  return (
    <div
      className={`task-card flex flex-col justify-between bg-gray bg-opacity-50 transition hover:bg-opacity-100 rounded-3xl p-5 relative overflow-hidden group ${task.status !== TaskStatus.ACTIVE && "opacity-50"}`}
      id={task.id.toString()}
      draggable="true"
      onDragStart={() => dragStart(date, task.id)}
      onMouseLeave={() => setSelectTag(false)}
    >
      <TaskNameArea value={task.name} change={handleNameChange} />
      <div className="flex justify-between items-center min-h-6">
        <div onClick={() => setSelectTag(!selectTag)}>
          {task.tag ? (
            <TaskTag {...task.tag} />
          ) : (
            <div className="opacity-0 group-hover:opacity-100 transition">
              <TaskTag name="Add tag" isNew={true} />
            </div>
          )}
        </div>
        <div className="flex gap-1 items-center">
          <div
            className={`cursor-pointer opacity-0 group-hover:opacity-100 transition text-orange text-xl`}
            onClick={handleRemoveTask}
          >
            <VscTrash />
          </div>
          <div
            className={`cursor-pointer transition text-xl ${task.isImportant ? "text-red opacity-100" : "text-purple opacity-0 group-hover:opacity-100"}`}
            onClick={() => handleStatusChange("isImportant", !task.isImportant)}
          >
            <VscFlame />
          </div>
          <InputCheckbox
            value={task.status !== TaskStatus.ACTIVE}
            change={(value) => handleStatusChange("status", value)}
          />
        </div>
      </div>
      {selectTag && (
        <div className="mt-1">
          <TagSelect onClick={handleTagSelect} />
        </div>
      )}
    </div>
  );
}
