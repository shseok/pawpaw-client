import EnteredChatList from '@/components/pages/comunity/EnteredChatList';
import RecommendChatList from '@/components/pages/comunity/RecommendChatList';

export default function ComunityPage() {
  return (
    <main className="flex flex-col w-full gap-10 p-8 overflow-hidden mt-[60px] tabled:mt-0">
      <EnteredChatList />
      <RecommendChatList />
    </main>
  );
}
