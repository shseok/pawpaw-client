import Image from 'next/image';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import FlexBox from '@/components/ui/FlexBox';
import EditIcon from '@/public/svgs/MyPage/editIcon.svg';
import LocationIcon from '@/public/svgs/MyPage/locationIcon.svg';
import PreferenceIcon from '@/public/svgs/MyPage/preferenceIcon.svg';
import PuppyIcon from '@/public/svgs/MyPage/puppyIcon.svg';
import { UserInfo } from '@/types/types';

export default function ProfileCard({ user }: { user: UserInfo }) {
  return (
    <FlexBox
      direction="column"
      className="w-full md:w-auto relative gap-4 p-10 bg-white rounded-[10px] shadow-chatCard"
    >
      <PreferenceIcon className="w-[22px] h-[22px] absolute top-5 right-5" />
      <div className="relative">
        <Image src={user.imageUrl} alt="프로필 사진" width={160} height={160} />
        <FlexBox className="absolute bottom-0 right-0 border border-white rounded-full bg-primary-200 w-11 h-11">
          <EditIcon className="w-7 h-7" />
        </FlexBox>
      </div>
      <FlexBox direction="column" className="gap-2">
        <div className="body2">{user.role}</div>
        <div className="header2">{user.nickname}</div>
        <div className="caption2 text-grey-400">{user.briefIntroduction}</div>
      </FlexBox>
      <FlexBox direction="column" className="p-2">
        <FlexBox className="gap-1">
          <LocationIcon />
          <div className="header3 text-grey-400">{user.position.address}</div>
        </FlexBox>
        <Divider type="horizontal" />
      </FlexBox>
      <Button size="lg" className="w-full header3">
        <FlexBox className="gap-1">
          <EditIcon className="w-6 h-6" />
          <div>내 프로필 편집</div>
        </FlexBox>
      </Button>
      <Button size="lg" variant="secondary" className="w-full header3">
        <FlexBox className="gap-1">
          <PuppyIcon className="w-[21px] h-[18.78px]" />
          <div>반려동물 추가/변경</div>
        </FlexBox>
      </Button>
    </FlexBox>
  );
}
