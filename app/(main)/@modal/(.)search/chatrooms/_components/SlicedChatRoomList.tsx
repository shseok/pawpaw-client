import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import { fetchFilteredChatRooms } from '@/service/server/chatRoom';

export default async function SlicedChatRoomList({ query }: { query: string }) {
  const chatrooms = await fetchFilteredChatRooms(query);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {chatrooms.content.slice(0, 4).map((chatroom) => (
        <NormalChatCard key={chatroom.id} {...chatroom} />
      ))}
    </div>
  );
}
