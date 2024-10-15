import { ITag } from "../../types";
import TaskTag from "../buttons/TaskTag.tsx";

export default function TotalTaskCard({
  text,
  tags,
}: {
  text: string;
  tags?: ITag[];
}) {
  return (
    <div className="flex flex-col p-6 bg-gray rounded-3xl">
      <div className="font-semibold text-xl h-36">{text}</div>
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
