import NormalChatCard from '@/components/ui/ChatCard/NormalChatCard';
import { fetchFilteredChatRooms } from '@/service/server/chatroom';
import Link from 'next/link';

export default async function SlicedChatRoomList({ query }: { query: string }) {
  const chatrooms = await fetchFilteredChatRooms(query);

  return (
    <section className="flex flex-col gap-4 mt-4 ">
      <div className="flex justify-between">
        <span className="header4">검색된 채팅방 {chatrooms.length}건</span>
        <Link
          href={`/search/chatrooms?query=${query ?? ' '}&page=1`}
          className="header4 text-grey-400"
        >
          더보기
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {chatrooms.slice(0, 4).map((chatroom) => (
          <NormalChatCard key={chatroom.id} {...chatroom} />
        ))}
      </div>
    </section>
  );
}
