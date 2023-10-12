import MyPageMain from '@/components/pages/mypage/MyPageMain';
import SideProfile from '@/components/pages/mypage/SideProfile';

export default function CommunityPage() {
  return (
    <main className="w-full p-8">
      <div className="flex flex-col md:static">
        <SideProfile />
        <MyPageMain />
      </div>
    </main>
  );
}
