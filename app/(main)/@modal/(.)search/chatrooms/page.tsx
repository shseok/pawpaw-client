import { Suspense } from 'react';
import { fetchChatRoomsPage } from '@/service/server/chatroom';
import ChatRoomList from './_components/ChatRoomList';
import Pagination from '../_components/Pagination';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  const totalPage = await fetchChatRoomsPage(query);

  return (
    <>
      <section className="h-full overflow-y-auto">
        <Suspense fallback={<div>loading...</div>}>
          <ChatRoomList query={query} />
        </Suspense>
      </section>
      <Pagination totalPages={totalPage} />
    </>
  );
}
