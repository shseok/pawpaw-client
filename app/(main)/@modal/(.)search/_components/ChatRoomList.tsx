import { fetchFilteredChatRooms } from '@/service/server/chatRoom';
import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';

export default async function ChatRoomList({ query }: { query: string }) {
  const chatrooms = await fetchFilteredChatRooms(query);

  return (
    <div className="flex flex-col h-full gap-4 pb-20 mt-3">
      <span className="header4">채팅방 {chatrooms.length}건</span>
      <div className="grid h-full grid-cols-1 gap-4 p-2 overflow-auto sm:grid-cols-2 ">
        {chatrooms.map((chatroom) => (
          <NormalChatCard key={chatroom.id} {...chatroom} />
        ))}
      </div>
    </div>
  );
}
