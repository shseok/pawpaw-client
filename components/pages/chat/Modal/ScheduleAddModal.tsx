import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import useInput from '@/hooks/common/useInput';

export default function ScheduleAddModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { value, onChangeValue } = useInput('');

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
            <span>시작 날짜</span>
            <div className="flex gap-2">
              <div className="border rounded-[10px] px-5 py-4">2023</div>
              <div className="border rounded-[10px] px-5 py-4 ">09</div>
              <div className="border rounded-[10px] px-5 py-4 ">01</div>
              <div className="border rounded-[10px] px-5 py-4 flex-1 text-center">
                오후 00 : 00
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <span>종료 날짜</span>
            <div className="flex gap-2">
              <div className="border rounded-[10px] px-5 py-4">2023</div>
              <div className="border rounded-[10px] px-5 py-4 ">09</div>
              <div className="border rounded-[10px] px-5 py-4 ">01</div>
              <div className="border rounded-[10px] px-5 py-4 flex-1 text-center">
                오후 00 : 00
              </div>
            </div>
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
