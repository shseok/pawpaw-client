import Feed from '@/components/pages/main/Feed';
import SimpleChatCardList from '@/components/pages/main/SimpleChatCardList';
import RecommendPlace from '@/components/pages/main/RecommendPlace';

export default function Home() {
  return (
    <main className="flex items-start flex-1 w-full h-full gap-10 p-8 mt-0 overflow-y-scroll">
      <Feed />
      <aside className="sticky top-0 flex-col justify-between hidden w-3/6 h-full tablet:flex">
        <SimpleChatCardList />
        <RecommendPlace />
      </aside>
    </main>
  );
}
