export const formatDate = (date: number): string =>
  new Date(date).toISOString().split("T")[0];

export const getDate = (date: number): number => {
  return new Date(date).getDate();
};

export const getTodayUTC = () => {
  const date = new Date();
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
};

export const getDay = (date: number): string => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date(date).getDay()];
};
export const getMonth = (date: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[new Date(date).getMonth()];
};
export const getYear = (date: number): number => new Date(date).getFullYear();

export const generateDate = (date: number, count: number): number[] => {
  const dayStep = count < 0 ? 24 * 3600000 * -1 : 24 * 3600000;
  const result = [];
  for (let i = 0; i < Math.abs(count); i++) {
    date += dayStep;
    result.push(date);
  }
  return count < 0 ? result.reverse() : result;
};
