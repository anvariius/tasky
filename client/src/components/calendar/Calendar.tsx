import { useEffect, useState } from "react";
import CalendarTaskList from "./CalendarTaskList.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper";
import "swiper/css";
import CalendarControls from "./CalendarControls.tsx";
import { useCalendar } from "../../hooks/useCalendar.ts";
import { ISortedTasks } from "../../types";
import { taskList } from "../../state/TaskList.ts";
import DragContainer from "../dragAndDrop/DragContainer.tsx";
import { UniqueIdentifier } from "@dnd-kit/core";

export default function Calendar() {
  const [tasks, setTasks] = useState<ISortedTasks>(taskList);
  const { dates, currentDate, setCurrentDate } = useCalendar();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleSlideChange = (s: SwiperType) => {
    setCurrentDate(dates[s.activeIndex]);
    !s.activeIndex && s.slideTo(15);
  };

  useEffect(() => {
    const newTaskDates: ISortedTasks = {};
    dates.forEach((date) => {
      if (!tasks[date]) newTaskDates[date] = [];
    });
    setTasks({ ...tasks, ...newTaskDates });
  }, [dates]);

  const changeTasksPosition = ({
    activeId,
    overId,
    activeContainerId,
    overContainerId,
  }: {
    activeId: UniqueIdentifier;
    overId: UniqueIdentifier;
    activeContainerId: UniqueIdentifier;
    overContainerId: UniqueIdentifier;
  }) => {
    const newTasks = { ...tasks };
    const [activeColumn, overColumn] = [
      newTasks[activeContainerId],
      newTasks[overContainerId],
    ];

    const activeTaskIndex = activeColumn?.findIndex(
      (task) => task.id === activeId,
    );
    const overTaskIndex = overColumn?.findIndex((task) => task.id === overId);

    if (activeContainerId === overContainerId) {
      if (!newTasks[overContainerId].length) return null;
      const overTask = newTasks[overContainerId][overTaskIndex];
      newTasks[overContainerId][overTaskIndex] =
        newTasks[activeContainerId][activeTaskIndex];
      newTasks[activeContainerId][activeTaskIndex] = overTask;
    } else {
      newTasks[overContainerId] = [
        ...overColumn.slice(0, overTaskIndex),
        newTasks[activeContainerId][activeTaskIndex],
        ...overColumn.slice(overTaskIndex, overColumn.length),
      ];
      newTasks[activeContainerId].splice(activeTaskIndex, 1);
    }

    setTasks(newTasks);
  };

  return (
    <>
      <CalendarControls swiper={swiper} currentDate={currentDate} />
      <div className="h-0.5 w-full bg-gray my-5"></div>
      <DragContainer dragCallback={changeTasksPosition} items={dates}>
        <Swiper
          allowTouchMove={false}
          spaceBetween={15}
          slidesPerView={4}
          initialSlide={14}
          onSlideChange={handleSlideChange}
          onSwiper={(s) => setSwiper(s)}
        >
          {dates.map((date) => (
            <SwiperSlide key={date}>
              <CalendarTaskList date={date} tasks={tasks[date]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </DragContainer>
    </>
  );
}
