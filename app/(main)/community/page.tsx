import type { Metadata } from 'next';
import EnteredChatList from '@/components/pages/community/EnteredChatList';
import RecommendChatList from '@/components/pages/community/RecommendChatList';
import TrendingChatList from '@/components/pages/community/TrendingChatList';
import AddChatRoomButton from '@/components/pages/community/AddChatRoomButton';
// import getUserInfo from '@/service/user';

export const metadata: Metadata = {
  title: 'pawpaw | Comunity',
  description: '반려동물 모임을 위한 실시간 오픈채팅 커뮤니티',
};

export default async function CommunityPage() {
  // const userInfo = await getUserInfo();
  return (
    <main className="flex flex-col w-full gap-10  p-8 overflow-hidden mt-[60px] tablet:mt-0">
      <h1 className="header2">참여중인 채팅방</h1>
      <EnteredChatList />
      <h1 className="flex w-full mb-3 text-xl font-bold tablet:mb-5">
        {/* <p className="hidden text-green-600 tablet:block"> */}
        {/* {userInfo.nickname} */}
        {/* </p> */}
        <p className="hidden tablet:block">님에게 추천하는 </p>
        <p>신규 채팅방</p>
      </h1>
      <RecommendChatList />
      <TrendingChatList />
      <AddChatRoomButton />
    </main>
  );
}
