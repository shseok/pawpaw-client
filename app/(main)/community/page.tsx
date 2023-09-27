import { Suspense } from 'react';
import EnteredChatList from '@/components/pages/community/EnteredChatList';
import RecommendChatList from '@/components/pages/community/RecommendChatList';
import TrendingChatList from '@/components/pages/community/TrendingChatList';
import AddChatRoomButton from '@/components/pages/community/AddChatRoomButton';
import RecommendChatLoading from '@/components/ui/Skeleton/RecommendChatLoading';
import EnteredChatLoading from '@/components/ui/Skeleton/EnteredChatLoading';

export default async function CommunityPage() {
  return (
    <main className="flex flex-col w-full gap-10 tablet:gap-[60px] p-8 overflow-hidden mt-[60px] tablet:mt-0">
      <div className="flex flex-col">
        <h1 className="flex w-full text-xl font-bold">
          <p className="text-green-600">지상최강감자</p>
          <p>님이 참여한 채팅방</p>
        </h1>
        <Suspense fallback={<EnteredChatLoading />}>
          <EnteredChatList />
        </Suspense>
      </div>
      <EnteredChatLoading />
      <Suspense fallback={<RecommendChatLoading />}>
        <RecommendChatList />
      </Suspense>
      <TrendingChatList />
      <AddChatRoomButton />
    </main>
  );
}
