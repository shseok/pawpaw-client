import { format, setHours, setMinutes } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { Dispatch, SetStateAction } from 'react';
import { Select } from '@/components/ui/Select';
import { HOUR, MINUTE } from '@/constant/days';

interface TimeSelectProps {
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  selectedDate: Date;
}

export default function TimeSelect({
  setSelectedDate,
  selectedDate,
}: TimeSelectProps) {
  const onChangeHour = (hourValue: string) => {
    setSelectedDate(setHours(selectedDate, Number(hourValue)));
  };
  const onChangeMinute = (minuteValue: string) => {
    setSelectedDate(setMinutes(selectedDate, Number(minuteValue)));
  };

  return (
    <div className="flex items-center w-full border rounded-[10px] p-4">
      <Select onChange={onChangeHour}>
        <Select.Trigger>
          <span className="flex justify-center w-full gap-2">
            <div>{format(selectedDate, 'aa', { locale: ko })}</div>
            <div>{format(selectedDate, 'HH')}시</div>
          </span>
        </Select.Trigger>
        <Select.OptionList>
          {HOUR.map((i) => (
            <Select.Option value={i} key={i}>
              {i}
            </Select.Option>
          ))}
        </Select.OptionList>
      </Select>
      :
      <Select onChange={onChangeMinute}>
        <Select.Trigger>{format(selectedDate, 'mm')}분</Select.Trigger>
        <Select.OptionList>
          {MINUTE.map((i) => (
            <Select.Option value={i} key={i}>
              {i}
            </Select.Option>
          ))}
        </Select.OptionList>
      </Select>
    </div>
  );
}
