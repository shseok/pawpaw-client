import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import useInput from '@/hooks/common/useInput';
import useScheduleDate from '../hooks/useScheduleDate';
import EndDateSelectGroup from './EndDateSelectGroup';
import StartDateSelectGroup from './StartDateSelectGroup';

export default function ScheduleAddModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { endDate, handleEndDate, handleStartDate, startDate } =
    useScheduleDate();
  const { value, onChangeValue } = useInput('');

  const lastDay = new Date(
    Number(endDate.year),
    Number(endDate.month),
    0,
  ).getDate();

  const days = Array.from({ length: lastDay }, (_, index) =>
    (index + 1).toString().padStart(2, '0'),
  );

  useEffect(() => {
    if (days.includes(endDate.date)) return;
    handleEndDate('date', String(lastDay));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate.month]);

  const formattedEndDate = `${endDate.year}-${endDate.month}-${endDate.date}`;
  const formattedStartDate = `${startDate.year}-${startDate.month}-${startDate.date}`;
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
          <div className="flex flex-col w-full gap-2">
            <StartDateSelectGroup
              startDate={startDate}
              handleStartDate={handleStartDate}
            />
            <EndDateSelectGroup
              endDate={endDate}
              handleEndDate={handleEndDate}
            />
          </div>
          <label htmlFor="allday" className="flex w-full gap-2">
            <input type="checkbox" id="allday" />
            <p>하루종일</p>
          </label>
        </FlexBox>
        <div className="flex w-full gap-3">
          <Button
            variant="secondary"
            className="w-full"
            onClickAction={closeModal}
          >
            취소
          </Button>
          <Button className="w-full">등록</Button>
        </div>
      </FlexBox>
    </FlexBox>
  );
}
