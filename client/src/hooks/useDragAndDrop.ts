import { Id } from "../types";
import { useEffect, useState } from "react";

export const useDragAndDrop = (handleTaskDrag: Function) => {
  const initialDndContent = {
    activeId: null,
    activeColumn: null,
    overId: null,
    overColumn: null,
  };
  const [dndContent, setDndContent] = useState<{
    [key: string]: Id | null | undefined;
  }>(initialDndContent);
  const dragStart = (activeColumn: Id, activeId: Id) => {
    setDndContent({ ...initialDndContent, activeId, activeColumn });
  };

  const dragEnd = (overColumn: Id, target: Element) => {
    let overId: Id | null | undefined = target.id;
    if (!overId) overId = target.closest(".task-card")?.id;
    if (!overId) overId = null;
    setDndContent({ ...dndContent, overColumn, overId });
  };

  useEffect(() => {
    if (!dndContent.activeId || !dndContent.overColumn) return;
    handleTaskDrag(dndContent);
  }, [dndContent]);

  return { dragStart, dragEnd };
};
