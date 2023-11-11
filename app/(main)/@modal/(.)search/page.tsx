import { Suspense } from 'react';
import SlicedChatRoomList from './chatrooms/_components/SlicedChatRoomList';
import SlicedBoardList from './boards/_components/SlicedBoardList';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const { query, page } = searchParams;

  return (
    <main className="flex flex-col h-full p-2 overflow-y-auto">
      <Suspense fallback={<div>loading...</div>}>
        <SlicedChatRoomList query={query} />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <SlicedBoardList query={query} page={page} />
      </Suspense>
    </main>
  );
}
