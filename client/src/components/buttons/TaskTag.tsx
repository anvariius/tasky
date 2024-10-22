import { ITag } from "../../types";

interface ITagAdd {
  isNew?: boolean;
  isTiny?: boolean;
}

type NewTag = ITag & ITagAdd;

export default function TaskTag({
  name,
  color = "pink",
  isNew = false,
  isTiny = false,
}: NewTag) {
  return (
    <div
      className={`flex justify-center transition cursor-pointer font-medium ${isTiny ? "py-0.5 px-1.5 rounded-xl min-w-10 text-xs" : "py-0.5 px-3 rounded-2xl min-w-20 text-sm"} ${isNew ? "border-dashed border-purple bg-purple bg-opacity-10 hover:bg-opacity-30 text-purple" : `bg-${color} hover:bg-opacity-70`}`}
    >
      {name}
    </div>
  );
}
