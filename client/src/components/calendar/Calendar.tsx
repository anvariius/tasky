import { useState } from "react";
import CalendarTaskList from "./CalendarTaskList.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper";
import "swiper/css";
import CalendarControls from "./CalendarControls.tsx";
import { useCalendar } from "../../hooks/useCalendar.ts";
import { useDragAndDrop } from "../../hooks/useDragAndDrop.ts";
import { useTasks } from "../../hooks/useTasks.ts";

export default function Calendar() {
  const { tasks, handleTaskDrag, updateTaskProperty, addNewTask, removeTask } =
    useTasks();
  const dndHook = useDragAndDrop(handleTaskDrag);

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const { dates, currentDate, setCurrentDate } = useCalendar();

  const handleSlideChange = (s: SwiperType) => {
    setCurrentDate(dates[s.activeIndex]);
    !s.activeIndex && s.slideTo(15);
  };

  return (
    <>
      <CalendarControls swiper={swiper} currentDate={currentDate} />
      <div className="h-0.5 w-full bg-gray my-5"></div>
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
            <CalendarTaskList
              date={date}
              tasks={tasks[date]}
              {...dndHook}
              changeTask={updateTaskProperty}
              addTask={() => addNewTask(date)}
              removeTask={removeTask}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
