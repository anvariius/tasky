import { useState } from "react";
import { ITag } from "../types";

const initialTags: ITag[] = [
  { name: "sport", color: "purple" },
  { name: "work", color: "yellow" },
  { name: "study", color: "lightBlue" },
  { name: "relax", color: "pink" },
  { name: "other", color: "green" },
  { name: "islam", color: "pink" },
  { name: "proga", color: "orange" },
];

export const useTags = () => {
  const [tags] = useState<ITag[]>(initialTags);

  return { tags };
};
