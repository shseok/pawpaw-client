import type { Metadata } from 'next';
import EnteredChatList from '@/components/pages/community/EnteredChatList';
import RecommendChatList from '@/components/pages/community/RecommendChatList';
import TrendingChatList from '@/components/pages/community/TrendingChatList';
import AddChatRoomButton from '@/components/pages/community/AddChatRoomButton';

export const metadata: Metadata = {
  title: 'pawpaw | Comunity',
  description: '반려동물 모임을 위한 실시간 오픈채팅 커뮤니티',
};

export default function CommunityPage() {
  return (
    <main className="flex flex-col w-full gap-10  p-8 overflow-hidden mt-[60px] tablet:mt-0">
      <h1 className="header2">참여중인 채팅방</h1>
      <EnteredChatList />
      <RecommendChatList />
      <TrendingChatList />
      <AddChatRoomButton />
    </main>
  );
}
