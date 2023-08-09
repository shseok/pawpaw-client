import Feed from "@/components/pages/Feed";
import ChatCardList from "@/components/pages/main/ChatCardList";
import EnteredChatCard from "@/components/ui/EnteredChatCard";
export default function Home() {
  return (
    <main className="flex w-full p-4">
      <Feed />
      <ChatCardList />
    </main>
  );
}
