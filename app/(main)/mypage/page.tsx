import MyPageMain from '@/components/pages/mypage/MyPageMain';
import SideProfile from '@/components/pages/mypage/SideProfile';
import FlexBox from '@/components/ui/FlexBox';

export default function CommunityPage() {
  return (
    <main className="w-full p-8">
      <FlexBox justify="between" align="start" className="gap-8">
        <SideProfile />
        <MyPageMain />
      </FlexBox>
    </main>
  );
}
