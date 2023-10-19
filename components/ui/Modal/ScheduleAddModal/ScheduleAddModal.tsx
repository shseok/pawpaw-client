import { useState, useEffect } from 'react';
import { format, startOfDay, endOfDay } from 'date-fns';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import useInput from '@/hooks/common/useInput';
import DatePicker from '@/components/ui/DatePicker';
import { usePathname } from 'next/navigation';
import useCreateSchedule from '@/hooks/mutations/useCreateSchedule';
import LoadingIcon from '@/public/loading.svg';
import TimeSelect from './TimeSelect';

export default function ScheduleAddModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [isAlldayChecked, setIsAlldayChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const roomId = usePathname().split('/')[2];
  const isScheduleValueSet = startDate >= endDate || !title || !description;
  const { mutate: scheduleMutate, isLoading } = useCreateSchedule(closeModal);

  // 스케줄 생성시 하루종일 옵션을 체크하면 시,분 을 00시00분으로 초기화한다.
  useEffect(() => {
    if (isAlldayChecked) {
      setStartDate(startOfDay(startDate));
      setEndDate(endOfDay(endDate));
    }
  }, [isAlldayChecked]);
  const createNewSchedule = () => {
    scheduleMutate({
      roomId,
      scheduleInfo: {
        name: title,
        description,
        startDate: format(startDate, 'yyyy-MM-dd HH:mm:ss'),
        endDate: format(endDate, 'yyyy-MM-dd HH:mm:ss'),
      },
    });
  };

  return (
    <FlexBox direction="column" className=" w-screen md:w-[672px] gap-4 ">
      <div className="self-end hidden md:block">
        <button type="button" onClick={closeModal}>
          <XIcon className="w-8 h-8 fill-white" />
        </button>
      </div>
      <FlexBox
        direction="column"
        className="w-full bg-white rounded-[10px] p-9 gap-7"
      >
        <FlexBox direction="column" className="w-full gap-4">
          <h2 className="w-full header2">스케줄 추가</h2>
          <input
            type="text"
            className="px-5 py-4 rounded-[10px] w-full focus-primary body1"
            placeholder="스케줄 제목을 입력해보세요."
            value={title}
            onChange={onChangeTitle}
          />
          <input
            type="text"
            className="px-5 py-4 rounded-[10px] w-full focus-primary body1"
            placeholder="스케줄에 대한 설명을 해주세요."
            value={description}
            onChange={onChangeDescription}
          />

          {/** 시작 날짜 */}
          <FlexBox direction="column" className="w-full gap-2">
            <span className="w-full body1">시작 날짜</span>
            <div className="flex flex-col w-full gap-2 tablet:flex-row">
              <DatePicker
                selectedDate={startDate}
                setSelectedDate={setStartDate}
              />
              {!isAlldayChecked && (
                <TimeSelect
                  selectedDate={startDate}
                  setSelectedDate={setStartDate}
                />
              )}
            </div>
          </FlexBox>

          {/** 종료 날짜 */}
          <FlexBox direction="column" className="w-full gap-2">
            <span className="w-full body1">종료 날짜</span>
            <div className="flex flex-col w-full gap-2 tablet:flex-row">
              <DatePicker selectedDate={endDate} setSelectedDate={setEndDate} />
              {!isAlldayChecked && (
                <TimeSelect
                  selectedDate={endDate}
                  setSelectedDate={setEndDate}
                />
              )}
            </div>
          </FlexBox>

          <label
            htmlFor="allday"
            className="flex items-center self-start gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="allday"
              className="w-6 h-6 rounded-full checked:bg-primary-200 checked:hover:bg-primary-200"
              onChange={(e) => setIsAlldayChecked(e.target.checked)}
            />
            <p className="body1">하루종일</p>
          </label>
        </FlexBox>
        <div className="flex w-full gap-3">
          <Button variant="secondary" onClickAction={closeModal} fullWidth>
            취소
          </Button>
          <Button
            disabled={isScheduleValueSet}
            onClickAction={createNewSchedule}
            fullWidth
          >
            {isLoading ? (
              <p className="flex items-center justify-center gap-2">
                <LoadingIcon className="animate-spin" />
                스케줄 생성중...
              </p>
            ) : (
              <span>등록</span>
            )}
          </Button>
        </div>
      </FlexBox>
    </FlexBox>
  );
}
