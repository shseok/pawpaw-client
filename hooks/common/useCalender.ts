import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  eachDayOfInterval,
  format,
} from 'date-fns';

const useCalender = (selectedDate: Date) => {
  const weekDays = [];
  const weekStartDate = startOfWeek(new Date());
  for (let day = 0; day < 7; day += 1) {
    weekDays.push(format(addDays(weekStartDate, day), 'EEEEE'));
  }

  const 현재달의시작날짜 = startOfMonth(selectedDate);
  const 현재달의마지막날짜 = endOfMonth(selectedDate);
  const 현재달의첫주의시작날짜 = startOfWeek(현재달의시작날짜);
  const 현재달마지막주의끝날짜 = endOfWeek(현재달의마지막날짜);
  const currentMonthAllDates = eachDayOfInterval({
    start: 현재달의첫주의시작날짜,
    end: 현재달마지막주의끝날짜,
  });

  return { weekDays, currentMonthAllDates };
};
export default useCalender;
