import ChatUserList from '@/components/pages/chat/ChatUserList';
import ChatRoomHeader from '@/components/pages/chat/ChatRoomHeader';

export default function ChatRoom({ params }: { params: { roomId: string } }) {
  const { roomId } = params;
  return (
    <main className="flex w-full">
      <div className="w-full tablet:w-4/6 bg-[#F5FFF6] border-r-[1px]">
        <ChatRoomHeader title="천하제일 내 반려동물 자랑방" />
        <div className="flex flex-col gap-5 p-10">
          <div>
            채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방
            {roomId}
          </div>
          <div>
            채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방
            {roomId}
          </div>
          <div>
            채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방채팅방
            {roomId}
          </div>
        </div>
      </div>
      <aside className="sticky top-0 hidden w-2/6 h-screen tablet:block">
        <ChatUserList />
        <div>스케줄</div>
      </aside>
    </main>
  );
}
