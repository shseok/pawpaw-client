import ChatRoom from '@/components/pages/chat/ChatRoom/ChatRoom';
import ChatUserList from '@/components/pages/chat/ChatRoom/ChatUserList';
import ScheduleList from '@/components/pages/chat/Schedule/ScheduleList';

export default function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { roomId } = params;
  return (
    <main className="flex-1 flex w-screen">
      <ChatRoom roomId={roomId} />
      <aside className="flex-col hidden w-3/6 h-screen min-w-fit tablet:flex">
        <ChatUserList roomId={roomId} />
        <ScheduleList roomId={roomId} />
      </aside>
    </main>
  );
}
