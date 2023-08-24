import FlexBox from '@/components/ui/FlexBox';
import Badge from '@/components/ui/Badge';
import ShareIcon from '@/public/share.svg';

export default function SimpleChatCard() {
  return (
    <FlexBox
      direction="column"
      align="start"
      className="w-full shadow-chatCard  rounded-[10px]  p-8 gap-3 bg-white"
    >
      <FlexBox justify="between" className="w-full">
        <FlexBox className="gap-1">
          <p className="header3">천하제일 내 반려동물 자랑방</p>
          <Badge />
        </FlexBox>
        <button type="button">
          <ShareIcon className="w-6 h-6" />
        </button>
      </FlexBox>
      <p className="w-full truncate">
        반려동물을 키우는 사람이라면 누구나 들어와서 자랑해주세요~
      </p>
    </FlexBox>
  );
}
