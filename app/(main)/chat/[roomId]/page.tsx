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
    <main className="flex w-full">
      <ChatRoom roomId={params.roomId} />
      <aside className="sticky top-0 flex-col hidden w-2/6 h-screen min-w-fit tablet:flex">
        <ChatUserList />
        <Schedule />
      </aside>
    </main>
  );
}
