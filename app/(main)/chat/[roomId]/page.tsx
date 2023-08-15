import ChatUserList from '@/components/pages/chat/ChatUserList';
import ChatRoomHeader from '@/components/pages/chat/ChatRoomHeader';
import ChatRoom from '@/components/pages/chat/ChatRoom';

export default function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  console.log(params);
  return (
    <main className="flex w-full">
      <div className="w-full h-full tablet:w-4/6 bg-[#F5FFF6] border-r-[1px]">
        <ChatRoomHeader title="천하제일 내 반려동물 자랑방" />
        <ChatRoom />
      </div>
      <aside className="sticky top-0 hidden w-2/6 h-screen min-w-fit tablet:block">
        <ChatUserList />
        <div>스케줄</div>
      </aside>
    </main>
  );
}
