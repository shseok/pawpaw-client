import { format, isSameDay, isSameMonth, addMonths, subMonths } from 'date-fns';
import CaretLeftIcon from '@/public/CaretLeft.svg';
import CaretRightIcon from '@/public/CaretRight.svg';
import CaretDownIcon from '@/public/CaretDown.svg';
import useCalender from '@/hooks/common/useCalender';
// eslint-disable-next-line import/no-cycle
import { DatePickerProps } from '.';

export default function Date({
  selectedDate,
  setSelectedDate,
  setPickerType,
}: DatePickerProps) {
  const { currentMonthAllDates, weekDays } = useCalender(selectedDate);
  const nextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  const prevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between px-3">
        <div className="flex gap-1 caption1">
          <span>{format(selectedDate, 'MMM yyyy')}</span>
          <button type="button" onClick={() => setPickerType('month')}>
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
        {weekDays.map((days, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>{days}</div>
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
  );
}
