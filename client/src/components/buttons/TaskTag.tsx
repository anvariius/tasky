import { ITag } from "../../types";

export default function TaskTag({ name, color = "pink" }: ITag) {
  return (
    <div
      className={`flex justify-center py-0.5 px-1.5 rounded-2xl w-20 text-sm font-medium bg-${color}`}
    >
      {name}
    </div>
  );
}
