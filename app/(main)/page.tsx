import Feed from '@/components/pages/main/Feed';
import ChatCardList from '@/components/pages/main/ChatCardList';

export default function Home() {
  return (
    <main className="flex w-full p-8 mt-[60px] tablet:mt-0">
      <div className="header1">하이염</div>
      <Feed />
      <ChatCardList />
    </main>
  );
}
