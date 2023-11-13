import { Suspense } from 'react';
import Link from 'next/link';
import SlicedChatRoomList from './chatrooms/_components/SlicedChatRoomList';
import SlicedBoardList from './boards/_components/SlicedBoardList';
import BoardsLoading from './boards/_components/BoardsLoading';
import ChatRoomsLoading from './chatrooms/_components/ChatRoomsLoading';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const { query, page } = searchParams;

  return (
    <main className="flex flex-col h-full p-2 overflow-y-auto">
      <section className="flex flex-col gap-4 mt-4 ">
        <div className="flex items-center justify-between">
          <p className="header4">채팅방</p>
          <Link
            href={`/search/chatrooms?query=${query ?? ' '}&page=1`}
            className="self-end header4 text-grey-400"
          >
            더보기
          </Link>
        </div>
        <Suspense fallback={<ChatRoomsLoading />}>
          <SlicedChatRoomList query={query} />
        </Suspense>
      </section>
      <section className="flex flex-col gap-4 mt-4 ">
        <div className="flex items-center justify-between">
          <p className="header4">게시글</p>
          <Link
            href={`/search/boards?query=${query ?? ' '}&page=1`}
            className="self-end header4 text-grey-400"
          >
            더보기
          </Link>
        </div>
        <Suspense fallback={<BoardsLoading />}>
          <SlicedBoardList query={query} page={page} />
        </Suspense>
      </section>
    </main>
  );
}
