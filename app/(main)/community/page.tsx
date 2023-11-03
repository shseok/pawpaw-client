import type { Metadata } from 'next';
import EnteredChatList from '@/app/(main)/community/_components/EnteredChatList';
import RecommendChatList from '@/app/(main)/community/_components/RecommendChatList';
import TrendingChatList from '@/app/(main)/community/_components/TrendingChatList';
import AddChatRoomButton from '@/app/(main)/community/_components/AddChatRoomButton';
import { Suspense } from 'react';
import EnteredChatLoading from '@/components/ui/Loading/EnteredChatLoading';
import RecommendChatLoading from '@/components/ui/Loading/RecommendChatLoading';
import fetchUserInfo from '@/service/server/user';

export const metadata: Metadata = {
  title: 'pawpaw | Comunity',
  description: '반려동물 모임을 위한 실시간 오픈채팅 커뮤니티',
};

export default async function CommunityPage() {
  const userInfo = await fetchUserInfo();

  return (
    <main className="flex flex-col flex-1 w-full h-full gap-10 p-8 overflow-x-hidden tablet:mt-0">
      <h1 className="header2">참여중인 채팅방</h1>
      <Suspense fallback={<EnteredChatLoading />}>
        <EnteredChatList />
      </Suspense>
      <h1 className="flex w-full text-xl font-bold">
        <p className="hidden text-green-600 tablet:block">
          {userInfo.nickname}
        </p>
        <p className="hidden tablet:block">님에게 추천하는 </p>
        <p>신규 채팅방</p>
      </h1>
      <Suspense fallback={<RecommendChatLoading />}>
        <RecommendChatList />
      </Suspense>
      <TrendingChatList />
      <AddChatRoomButton />
    </main>
  );
}
