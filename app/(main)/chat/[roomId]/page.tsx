import ChatRoom from '@/components/pages/chat/ChatRoom';
import ChatUserList from '@/components/pages/chat/ChatUserList';
import Schedule from '@/components/pages/chat/Schedule';

export default function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  console.log(params.roomId);

  return (
    <main className="flex w-screen">
      <ChatRoom roomId={params.roomId} />
      <aside className="flex-col hidden w-3/6 h-screen min-w-fit tablet:flex">
        <ChatUserList />
        <Schedule />
      </aside>
    </main>
  );
}
