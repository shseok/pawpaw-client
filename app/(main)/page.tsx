import Feed from '@/components/pages/main/Feed';
import ChatCardList from '@/components/pages/main/ChatCardList';

export default function Home() {
  return (
    <main className="flex w-full p-8 mt-[60px] tablet:mt-0">
      <Feed />
      <ChatCardList />
    </main>
  );
}
