import { useState } from 'react';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import useInput from '@/hooks/common/useInput';
import { Select } from '@/components/ui/Select';
import DatePicker from '@/components/ui/DatePicker';

const test = ['사과', '바나나', '파인애플', '망고', '딸기', '포도'];
export default function ScheduleAddModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { value, onChangeValue } = useInput('');
  const [selected, setSelected] = useState('사과');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onItemSelectHandler = (item: string) => {
    setSelected(item);
  };

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
          <div className="flex w-full gap-2">
            <DatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <Select onChange={onItemSelectHandler}>
              <Select.Trigger>
                <Select.Value defaultValue={selected} />
              </Select.Trigger>
              <Select.OptionList>
                {test.map((i) => (
                  <Select.Option value={i} key={i}>
                    {i}
                  </Select.Option>
                ))}
              </Select.OptionList>
            </Select>
          </div>
          <label htmlFor="allday" className="flex w-full gap-2">
            <input type="checkbox" id="allday" />
            <p>하루종일</p>
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
