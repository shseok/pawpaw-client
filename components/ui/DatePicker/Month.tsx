import { format, subYears, addYears, isSameMonth } from 'date-fns';
import CaretLeftIcon from '@/public/svgs/CaretLeft.svg';
import CaretRightIcon from '@/public/svgs/CaretRight.svg';
import CaretDownIcon from '@/public/svgs/CaretDown.svg';
import useCalender from '@/hooks/common/useCalender';
import { DatePickerProps } from '.';

export default function Month({
  onChangePickerType,
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
  const onChangeMonth = (month: Date) => {
    setSelectedDate(month);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full p-2">
        <span className="flex gap-1 caption1">
          {format(selectedDate, 'yyyy')}
          <button
            type="button"
            onClick={onChangePickerType}
            aria-label="Change Pick Type"
          >
            <CaretDownIcon className="w-4 h-4" />
          </button>
        </span>
        <div>
          <button
            type="button"
            onClick={onPrevYear}
            aria-label="Click Previous Year"
          >
            <CaretLeftIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onNextYear}
            aria-label="Click Next Year"
          >
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
            className={`rounded-full p-2 caption2 duration-75 ${
              isSameMonth(selectedDate, month)
                ? 'bg-primary-200 text-[#FFFFFF]'
                : 'hover:bg-primary-50 hover:text-primary-200'
            }
            `}
            onClick={() => onChangeMonth(month)}
          >
            {format(month, 'MMM')}
          </button>
        ))}
      </div>
    </div>
  );
}
