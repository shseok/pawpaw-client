import { format, subYears, addYears } from 'date-fns';
import CaretLeftIcon from '@/public/CaretLeft.svg';
import CaretRightIcon from '@/public/CaretRight.svg';
import CaretDownIcon from '@/public/CaretDown.svg';
// eslint-disable-next-line import/no-cycle
import useCalender from '@/hooks/common/useCalender';
// eslint-disable-next-line import/no-cycle
import { DatePickerProps } from '.';

export default function Month({
  setPickerType,
  selectedDate,
  setSelectedDate,
}: DatePickerProps) {
  const { allMonth } = useCalender(selectedDate);
  const onNextYear = () => {
    setSelectedDate(addYears(selectedDate, 1));
  };
  const onPrevYear = () => {
    setSelectedDate(subYears(selectedDate, 1));
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full">
        <span className="flex gap-1 caption1">
          {format(selectedDate, 'yyyy')}
          <button type="button" onClick={() => setPickerType('date')}>
            <CaretDownIcon />
          </button>
        </span>
        <div>
          <button type="button" onClick={onPrevYear}>
            <CaretLeftIcon className="w-4 h-4" />
          </button>
          <button type="button" onClick={onNextYear}>
            <CaretRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {allMonth.map((month, index) => (
          <button
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => setSelectedDate(month)}
          >
            {format(month, 'MMM')}
          </button>
        ))}
      </div>
    </div>
  );
}
