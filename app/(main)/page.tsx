import Feed from '@/components/pages/main/Feed';
import SimpleChatCardList from '@/components/pages/main/SimpleChatCardList';
import RecommendPlace from '@/components/pages/main/RecommendPlace';

export default function Home() {
  console.log('hoo');
  return (
    <main className="flex-1 w-full flex p-8 gap-10 mt-0 overflow-y-scroll h-full items-start">
      <Feed />
      <aside className="sticky top-0 flex-col justify-between hidden w-3/6 h-screen py-4 tablet:flex">
        <SimpleChatCardList />
        <RecommendPlace />
      </aside>
    </main>
  );
}
