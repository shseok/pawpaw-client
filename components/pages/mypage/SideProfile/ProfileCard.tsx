import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <>
      <FlexBox
        direction="column"
        className="relative w-[517px] gap-4 p-10 bg-white rounded-[10px] shadow-chatCard"
      >
        <Image
          src="/MyPage/preferenceIcon.svg"
          alt="설정 아이콘"
          width={32}
          height={32}
          className="absolute top-5 right-5"
        />
        <div className="relative">
          <Image
            src="/Feed/desktop/tempUserProfilePic.svg"
            alt="프로필 사진"
            width={160}
            height={160}
          />
          <FlexBox className="absolute bottom-0 right-0 border border-white rounded-full bg-primary-200 w-11 h-11">
            <Image
              src="/MyPage/editIcon.svg"
              alt="편집아이콘"
              width={28}
              height={28}
            />
          </FlexBox>
        </div>
        <FlexBox direction="column" className="gap-2">
          <div className="body2">@sooVack</div>
          <div className="header2">수박메론좋아</div>
          <div className="caption2 text-grey-400">
            3살 강쥐 수박이, 2살 앵무새 메론
          </div>
        </FlexBox>
        <FlexBox direction="column" className="p-2">
          <FlexBox className="gap-1">
            <Image
              src="/MyPage/locationIcon.svg"
              alt="위치아이콘"
              width={22}
              height={22}
            />
            <div className="header3 text-grey-400">노원구</div>
          </FlexBox>
          <Divider type="horizontal" />
        </FlexBox>
        <Button size="lg" className="w-full header3">
          <FlexBox className="gap-1">
            <Image
              src="/MyPage/editIcon.svg"
              alt="편집아이콘"
              width={24}
              height={24}
            />
            <div>내 프로필 편집</div>
          </FlexBox>
        </Button>
        <Button size="lg" variant="secondary" className="w-full header3">
          <FlexBox className="gap-1">
            <Image
              src="/MyPage/puppyIcon.svg"
              alt="강아지 아이콘"
              width={21}
              height={18.78}
            />
            <div>반려동물 추가/변경</div>
          </FlexBox>
        </Button>
      </FlexBox>
    </>
  );
}
