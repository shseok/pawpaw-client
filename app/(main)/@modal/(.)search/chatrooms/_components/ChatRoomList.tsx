import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import NotFoundIcon from '@/public/svgs/MagnifyingGlass.svg';
import { fetchFilteredChatRooms } from '@/service/server/chatRoom';

export default async function ChatRoomList({
  query,
  page,
}: {
  query: string;
  page?: string;
}) {
  const chatrooms = await fetchFilteredChatRooms(query, Number(page) || 1);
  const isExistChatRoom = chatrooms.content.length !== 0;
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
          {chatrooms.content.map((chatroom) => (
            <NormalChatCard key={chatroom.id} {...chatroom} />
          ))}
        </div>
      )}
    </div>
  );
}
