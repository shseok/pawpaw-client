import { Select } from '@/components/ui/Select';
import { MONTH } from '@/constant/constant';
import useCalculateDate from '../hooks/useCalculateDate';
import { DateKeyType } from '../hooks/useScheduleDate';

interface EndDateSelectProps {
  endDate: {
    year: string;
    month: string;
    date: string;
    hour: string;
  };
  handleEndDate: (key: DateKeyType, date: string) => void;
}
const currentYear = new Date().getFullYear();
const YEAR = Array.from({ length: 4 }, (_, index) => currentYear + index);
export default function EndDateSelectGroup({
  endDate,
  handleEndDate,
}: EndDateSelectProps) {
  const { dateArray, lastDate } = useCalculateDate(
    Number(endDate.year),
    Number(endDate.month),
  );
  return (
    <div className="flex flex-col w-full gap-2">
      <span>종료 날짜</span>
      <div className="flex gap-2">
        <Select>
          <Select.Trigger className="border rounded-[10px] px-5 py-4">
            <Select.Label defaultValue={new Date().getFullYear()} />
          </Select.Trigger>
          <Select.OptionList>
            {YEAR.map((year) => (
              <Select.Option value={year.toString()}>
                <div
                  role="button"
                  tabIndex={0}
                  className="w-full p-4"
                  onClick={() => handleEndDate('year', year.toString())}
                  aria-hidden="true"
                >
                  {year}
                </div>
              </Select.Option>
            ))}
          </Select.OptionList>
        </Select>
        <Select>
          <Select.Trigger className="border rounded-[10px] px-5 py-4">
            <Select.Label defaultValue={endDate.month} />
          </Select.Trigger>
          <Select.OptionList>
            {MONTH.map((month) => (
              <Select.Option value={month} key={month}>
                <div
                  role="button"
                  tabIndex={0}
                  className="w-full p-4"
                  onClick={() => handleEndDate('month', month)}
                  aria-hidden="true"
                >
                  {month}
                </div>
              </Select.Option>
            ))}
          </Select.OptionList>
        </Select>

        <Select>
          <Select.Trigger className="border rounded-[10px] px-5 py-4 ">
            <div>
              {dateArray.includes(endDate.date) ? endDate.date : lastDate}
            </div>
          </Select.Trigger>
          <Select.OptionList>
            {dateArray.map((date) => (
              <Select.Option value={date} key={date}>
                <div
                  className="w-full p-4"
                  role="button"
                  tabIndex={0}
                  aria-hidden
                  onClick={() => handleEndDate('date', date)}
                >
                  {date}
                </div>
              </Select.Option>
            ))}
          </Select.OptionList>
        </Select>

        <Select className="w-full">
          <Select.Trigger className="border rounded-[10px] px-5 py-4 w-full">
            <Select.Label defaultValue={new Date().getDate()} />
          </Select.Trigger>
          <Select.OptionList>
            <Select.Option value="오전 11 : 00 ">오전 11 : 00</Select.Option>
          </Select.OptionList>
        </Select>
      </div>
    </div>
  );
}
