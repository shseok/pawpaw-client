import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import useInput from '@/hooks/common/useInput';
import DatePicker from '@/components/ui/DatePicker';
import TimeSelect from './TimeSelect';

export default function ScheduleAddModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { value, onChangeValue } = useInput('');
  const [isChecked, setIsChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log(isChecked);

  return (
    <FlexBox direction="column" className="w-full md:w-[672px] gap-4 ">
      <div className="self-end">
        <button type="button">
          <XIcon className="w-8 h-8" />
        </button>
      </div>
      <FlexBox
        direction="column"
        className="w-full bg-white rounded-[10px] p-9 gap-10"
      >
        <FlexBox direction="column" className="w-full gap-7">
          <h2 className="w-full header2">스케줄 추가</h2>
          <input
            type="text"
            className="px-5 py-4 border rounded-[10px] w-full focus-primary"
            placeholder="스케줄 제목을 입력해보세요"
            value={value}
            onChange={onChangeValue}
          />

          {/**시작 날짜 */}
          <div className="flex w-full gap-2">
            <DatePicker
              selectedDate={startDate}
              setSelectedDate={setStartDate}
            />
            <TimeSelect
              selectedDate={startDate}
              setSelectedDate={setStartDate}
            />
          </div>

          {/**종료 날짜 */}
          <div className="flex w-full gap-2 ">
            <DatePicker selectedDate={endDate} setSelectedDate={setEndDate} />
            <TimeSelect selectedDate={endDate} setSelectedDate={setEndDate} />
          </div>

          <label
            htmlFor="allday"
            className="flex items-center self-start gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="allday"
              className="w-6 h-6 rounded-full checked:bg-primary-200 checked:hover:bg-primary-200"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <p className="body1">하루종일</p>
          </label>
        </FlexBox>
        <div className="flex w-full gap-3">
          <Button variant="secondary" onClickAction={closeModal}>
            취소
          </Button>
          <Button>등록</Button>
        </div>
      </FlexBox>
    </FlexBox>
  );
}
