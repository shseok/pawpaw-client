import Feed from '@/components/pages/main/Feed';
import SimpleChatCardList from '@/components/pages/main/SimpleChatCardList';
import RecommendPlace from '@/components/pages/main/RecommendPlace';

export default function Home() {
  return (
    <main className="flex  w-full p-8 mt-[60px] tablet:mt-0 gap-10">
      <Feed />
      <aside className="sticky top-0 flex-col hidden w-2/6 h-screen gap-10 tablet:flex">
        <SimpleChatCardList />
        <RecommendPlace />
      </aside>
    </main>
  );
}
