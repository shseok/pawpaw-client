import FlexBox from '@/components/ui/FlexBox';
import ExportIcon from '@/public/Export.svg';
import AvatarGroup from './AvatarGroup';

export default function ScheduleCard() {
  const testArr1 = [1, 2, 3, 4, 5, 6, 78, 9, 0];
  return (
    <FlexBox
      as="li"
      direction="column"
      align="start"
      className="gap-5 p-8 rounded-[10px] shadow-chatCard"
    >
      <h3 className="header3">한강 산책</h3>
      <p className="text-[#474C51]">
        한강으로 산책갑시다! 배변봉투, 물 등 챙겨오세요~
      </p>
      <FlexBox
        direction="column"
        align="start"
        className="gap-2 border-l-[5px] border-l-[#FFD232] border w-full rounded-r-[10px] p-2"
      >
        <p>2023년 7월 28일 금요일</p>
        <p>11:00 ~ 12:00</p>
      </FlexBox>
      <FlexBox justify="between" className="w-full">
        <FlexBox direction="column" className="gap-2">
          <div className="w-full">참여자</div>
          <AvatarGroup userList={testArr1} />
        </FlexBox>
        <button type="button" className="self-end">
          <ExportIcon className="w-8 h-8" />
        </button>
      </FlexBox>
    </FlexBox>
  );
}
