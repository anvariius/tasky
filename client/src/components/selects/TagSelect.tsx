import TaskTag from "../buttons/TaskTag.tsx";
import { useTags } from "../../hooks/useTags.ts";

export default function TagSelect({ onClick }: { onClick: Function }) {
  const { tags } = useTags();
  return (
    <div className="flex justify-center flex-wrap border border-dashed border-purple py-1 gap-1.5 rounded-xl">
      {tags &&
        tags.map((tag) => (
          <div key={tag.name} onClick={() => onClick(tag)}>
            <TaskTag name={tag.name} color={tag.color} isTiny={true} />
          </div>
        ))}
      <div onClick={() => onClick(null)}>
        <TaskTag name="none" isNew={true} isTiny={true} />
      </div>
    </div>
  );
}
