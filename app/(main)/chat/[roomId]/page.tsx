import ChatRoom from '@/components/pages/chat/ChatRoom';
import ChatUserList from '@/components/pages/chat/ChatUserList';

export default function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  console.log(params.roomId);

  return (
    <main className="flex w-full">
      <ChatRoom />
      <aside className="sticky top-0 hidden w-2/6 h-screen min-w-fit tablet:block">
        <ChatUserList />
        <div>스케줄</div>
      </aside>
    </main>
  );
}
