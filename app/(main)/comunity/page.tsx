import EnteredChatList from '@/components/pages/comunity/EnteredChatList';
import RecommendChatList from '@/components/pages/comunity/RecommendChatList';
import TrendingChatList from '@/components/pages/comunity/TrendingChatList';

export default function ComunityPage() {
  return (
    <main className="flex flex-col w-full gap-5 p-8 overflow-hidden mt-[60px] tablet:mt-0">
      <EnteredChatList />
      <RecommendChatList />
      <TrendingChatList />
    </main>
  );
}
