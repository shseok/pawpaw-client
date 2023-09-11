'use client';

import { useState, useRef, Dispatch, SetStateAction } from 'react';
import { format, isSameDay, isSameMonth, addMonths, subMonths } from 'date-fns';
import useOutSideClick from '@/hooks/common/useOutSideClick';
import CaretLeftIcon from '@/public/CaretLeft.svg';
import CaretRightIcon from '@/public/CaretRight.svg';
import CaretDownIcon from '@/public/CaretDown.svg';
import useCalender from '@/hooks/common/useCalender';

interface DatePickerProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

export default function DatePicker({
  selectedDate,
  setSelectedDate,
}: DatePickerProps) {
  const ref = useRef(null);
  const [calenderOpen, setCalenderOpen] = useState(false);
  const { weekDays, currentMonthAllDates } = useCalender(selectedDate);
  useOutSideClick(ref, () => setCalenderOpen(false));

  const nextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  const prevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };

  return (
    <div className="relative bg-white" ref={ref}>
      <input
        type="text"
        value={format(selectedDate, 'yyyy년 MM월 dd일')}
        className="p-4 border rounded-[10px] focus-primary body1 text-center cursor-pointer"
        readOnly
        onClick={() => setCalenderOpen(!calenderOpen)}
      />
      {calenderOpen && (
        <div className="absolute flex flex-col gap-2 rounded-[10px] p-3 z-0 mt-2 w-72 bg-white shadow-chatCard caption2 animate-dropdown">
          <div className="flex items-center justify-between px-3">
            <div className="flex gap-1 caption1">
              <span>{format(selectedDate, 'MMM yyyy')}</span>
              <button type="button">
                <CaretDownIcon />
              </button>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={prevMonth}>
                <CaretLeftIcon className="w-4 h-4 fill-grey-400" />
              </button>
              <button type="button" onClick={nextMonth}>
                <CaretRightIcon className="w-4 h-4 fill-grey-400" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 place-items-center">
            {weekDays.map((days) => (
              <div key={days}>{days}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 ">
            {currentMonthAllDates.map((date, index) => (
              <button
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`p-2 rounded-full 
                ${isSameMonth(selectedDate, date) ? '' : 'text-grey-200'}
                ${
                  isSameDay(selectedDate, date)
                    ? 'bg-primary-200 text-[#FFFFFF]'
                    : 'hover:bg-primary-50 hover:text-primary-200'
                }`}
                type="button"
                onClick={() => setSelectedDate(date)}
              >
                {date.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
