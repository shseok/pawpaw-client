import Feed from '@/components/pages/main/Feed';
import SimpleChatCardList from '@/components/pages/main/SimpleChatCardList';
import RecommendPlace from '@/components/pages/main/RecommendPlace';

export default function Home() {
  return (
    <main className="flex  w-full p-8 mt-[60px] gap-10 tablet:mt-0 h-full">
      <Feed />
      <aside className="sticky top-0 flex-col justify-between hidden w-3/6 h-screen py-4 tablet:flex">
        <SimpleChatCardList />
        <RecommendPlace />
      </aside>
    </main>
  );
}
