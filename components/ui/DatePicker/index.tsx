'use client';

/* eslint-disable no-console */
import { useState, useRef } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  format,
  addDays,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  isSameMonth,
} from 'date-fns';
import ko from 'date-fns/locale/ko';
import useOutSideClick from '@/hooks/common/useOutSideClick';
import CaretLeftIcon from '@/public/CaretLeft.svg';
import CaretRightIcon from '@/public/CaretRight.svg';

export default function DatePicker() {
  const ref = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calenderOpen, setCalenderOpen] = useState(false);
  useOutSideClick(ref, () => setCalenderOpen(false));

  // 첫주 시작하는 일을 계산함 예를들어 9월1일 금요일이라면 첫주는 일요일순으로 시작함 역으로 계산하면 8월27일이 첫주 시작하는일이 된다.
  const weekStartDate = startOfWeek(new Date());

  const weekDays = [];
  for (let day = 0; day < 7; day += 1) {
    // 매개변수로 Date객체 또는 Number(년,월,일)을받고 두번째 매개변수로 추가할 일을 받는다. 해당 코드에서는 첫주 시작하는 일로부터 7일을 추가하여 배열에 추가한다
    weekDays.push(format(addDays(weekStartDate, day), 'E', { locale: ko }));
  }

  const 현재달의시작날짜 = startOfMonth(selectedDate);
  const 현재달의마지막날짜 = endOfMonth(selectedDate);
  const 현재달의첫주의시작날짜 = startOfWeek(현재달의시작날짜);
  const 현재달마지막주의끝날짜 = endOfWeek(현재달의마지막날짜);

  const 현재달의모든날짜 = eachDayOfInterval({
    start: 현재달의첫주의시작날짜,
    end: 현재달마지막주의끝날짜,
  });
  const nextMonth = () => {};
  const prevMonth = () => {};
  return (
    <div className="relative bg-white" ref={ref}>
      <input
        type="text"
        value={format(selectedDate, 'yyyy년 MM월 dd일')}
        className="p-4 border rounded-[10px] focus-primary body1 text-center"
        readOnly
        onClick={() => setCalenderOpen(!calenderOpen)}
      />
      {calenderOpen && (
        <div className="absolute flex flex-col gap-2 rounded-[10px] h-fit p-3 z-50 mt-2 w-72 bg-white shadow-chatCard caption2">
          <div className="flex items-center justify-between">
            <div className="caption1">{format(selectedDate, 'MMM yyyy')}</div>
            <div className="flex gap-2">
              <button type="button" onClick={nextMonth}>
                <CaretLeftIcon className="w-4 h-4 fill-grey-400" />
              </button>
              <button type="button" onClick={prevMonth}>
                <CaretRightIcon className="w-4 h-4 fill-grey-400" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 place-items-center">
            {weekDays.map((days) => (
              <div className="">{days}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 place-content-center">
            {현재달의모든날짜.map((v) => (
              <button
                className={`p-2 rounded-full
                ${isSameMonth(selectedDate, v) ? '' : 'text-grey-200'}
                ${
                  isSameDay(selectedDate, v)
                    ? 'bg-primary-200 text-[#FFFFFF]'
                    : 'hover:bg-primary-50 hover:text-primary-200'
                }`}
                type="button"
                onClick={() => setSelectedDate(v)}
              >
                {v.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
