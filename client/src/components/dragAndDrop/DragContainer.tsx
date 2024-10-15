import {
  closestCorners,
  DndContext,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

export default function DragContainer({
  dragCallback,
  items,
  children,
}: {
  dragCallback: Function;
  items: number[] | string[];
  children: JSX.Element;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDrag = (event: DragOverEvent) => {
    console.log(event);
    const activeId = event?.active?.id;
    const overId = event?.over?.id;
    const activeContainerId =
      event?.active?.data?.current?.sortable?.containerId;
    let overContainerId = event?.over?.data?.current?.sortable?.containerId;
    const delta = event?.delta.y;

    if (!overContainerId) overContainerId = overId;

    if (!activeId || !overId || !activeContainerId || !overContainerId)
      return null;

    dragCallback({
      activeId,
      overId,
      activeContainerId,
      overContainerId,
      delta,
    });
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragEnd={handleDrag}
      onDragOver={handleDrag}
    >
      <SortableContext items={items}>{children}</SortableContext>
    </DndContext>
  );
}
