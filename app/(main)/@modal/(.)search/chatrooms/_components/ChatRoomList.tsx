import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import NotFoundIcon from '@/public/svgs/MagnifyingGlass.svg';
import { fetchFilteredChatRooms } from '@/service/server/chatroom';

export default async function ChatRoomList({ query }: { query: string }) {
  const chatrooms = await fetchFilteredChatRooms(query);
  const isExistChatRoom = chatrooms.length !== 0;
  if (!chatrooms) return null;
  return (
    <div className="flex flex-col h-full gap-4 pb-20 mt-3">
      {!isExistChatRoom && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <NotFoundIcon className="w-40 h-40" />
          <p className="header2 text-grey-500">
            아쉽지만, 검색 결과가 없습니다.
          </p>
        </div>
      )}
      {isExistChatRoom && (
        <div className="grid h-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 ">
          {chatrooms.map((chatroom) => (
            <NormalChatCard key={chatroom.id} {...chatroom} />
          ))}
        </div>
      )}
    </div>
  );
}
