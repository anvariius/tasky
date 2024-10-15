import { generateDate, getTodayUTC } from "../utils/utils.ts";
import { useState } from "react";

export const useCalendar = () => {
  const today = getTodayUTC();
  const step = 15;
  const initialDates = [
    ...generateDate(today, -step),
    today,
    ...generateDate(today, step),
  ];
  const [dates, setDates] = useState(initialDates);
  const [currentDate, setCurrentDate] = useState(today);

  if (currentDate === dates[0]) {
    setDates([...generateDate(dates[0], -step), ...dates]);
  }
  if (currentDate === dates[dates.length - 4]) {
    setDates([...dates, ...generateDate(dates[dates.length - 1], step)]);
  }

  return { dates, currentDate, setCurrentDate, today };
};
