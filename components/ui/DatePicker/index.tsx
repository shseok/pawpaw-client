'use client';

import { useState, Dispatch, SetStateAction, useRef } from 'react';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import useOutSideClick from '@/hooks/common/useOutSideClick';
import Date from './Date';
import Month from './Month';
import DatePickerWrapper from './DatePickerWrapper';

export type PickerType = 'date' | 'month' | 'year' | '';
export interface DatePickerProps {
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  setPickerType: Dispatch<SetStateAction<PickerType>>;
}

export default function DatePicker({
  selectedDate,
  setSelectedDate,
}: Omit<DatePickerProps, 'setPickerType'>) {
  const ref = useRef(null);
  const [pickerType, setPickerType] = useState<PickerType>('');
  useOutSideClick(ref, () => setPickerType(''));

  const toggleDatePicker = () => {
    if (pickerType !== '') {
      setPickerType('');
    } else {
      setPickerType('date');
    }
  };
  const renderPickerByType = (type: PickerType) => {
    switch (type) {
      case 'date':
        return (
          <Date
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setPickerType={setPickerType}
          />
        );
      case 'month':
        return (
          <Month
            setPickerType={setPickerType}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full bg-white" ref={ref}>
      <input
        type="text"
        value={format(
          selectedDate,
          `yyyy년 MM월 dd일 (${format(selectedDate, 'E', { locale: ko })})`,
        )}
        className="p-4 rounded-[10px] focus-primary body1 w-full text-center cursor-pointer"
        readOnly
        onClick={toggleDatePicker}
      />
      {pickerType !== '' && (
        <DatePickerWrapper>{renderPickerByType(pickerType)}</DatePickerWrapper>
      )}
    </div>
  );
}
