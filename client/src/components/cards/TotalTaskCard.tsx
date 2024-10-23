import { ITag, ITaskStats } from "../../types";
import TaskTag from "../buttons/TaskTag.tsx";

export default function TotalTaskCard({
  stats,
  tags,
}: {
  stats: ITaskStats;
  tags?: ITag[];
}) {
  const statsContent = {
    activeTasks: {
      title: "To do today",
      color: "text-dark",
    },
    doneTasks: {
      title: "Done today",
      color: "text-green",
    },
    expiredTasks: {
      title: "Expired tasks",
      color: "text-red",
    },
  };
  return (
    <div className="flex flex-col justify-between p-6 bg-gray rounded-3xl h-56">
      <div className="flex flex-col gap-y-2">
        {Object.keys(stats).map((key) => (
          <div className={`font-semibold text-xl text dark`}>
            {statsContent[key].title}:{" "}
            <span className={statsContent[key].color}>{stats[key]}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-[-0.5rem]">
        {tags &&
          tags.map((tag) => (
            <div key={tag.name} className="ml-[-0.5rem]">
              <TaskTag name={tag.name} color={tag.color} />
            </div>
          ))}
      </div>
    </div>
  );
}
