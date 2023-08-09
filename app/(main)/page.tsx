import Feed from "@/components/pages/Feed";
import ChatCardList from "@/components/pages/main/ChatCardList";
export default function Home() {
  return (
    <main className="flex w-full p-8">
      <Feed />
      <ChatCardList />
    </main>
  );
}
