import { Suspense } from 'react';
import EnteredChatList from '@/components/pages/community/EnteredChatList';
import RecommendChatList from '@/components/pages/community/RecommendChatList';
import TrendingChatList from '@/components/pages/community/TrendingChatList';
import AddChatRoomButton from '@/components/pages/community/AddChatRoomButton';
import RecommendChatLoading from '@/components/ui/Skeleton/RecommendChatLoading';

export default async function CommunityPage() {
  return (
    <main className="flex flex-col w-full gap-10 tablet:gap-[60px] p-8 overflow-hidden mt-[60px] tablet:mt-0">
      <EnteredChatList />
      <Suspense fallback={<RecommendChatLoading />}>
        <RecommendChatList />
      </Suspense>
      <RecommendChatLoading />
      <TrendingChatList />
      <AddChatRoomButton />
    </main>
  );
}
