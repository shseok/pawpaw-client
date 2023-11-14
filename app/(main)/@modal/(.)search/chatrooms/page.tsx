import { Suspense } from 'react';
import { fetchChatRoomsPage } from '@/service/server/chatRoom';
import ChatRoomList from './_components/ChatRoomList';
import Pagination from '../_components/Pagination';
import ChatRoomsLoading from './_components/ChatRoomsLoading';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const { query, page } = searchParams;
  const totalPage = await fetchChatRoomsPage(query);
  return (
    <>
      <section className="h-full overflow-y-auto">
        <Suspense fallback={<ChatRoomsLoading />}>
          <ChatRoomList query={query} page={page} />
        </Suspense>
      </section>
      <Pagination totalPages={totalPage} />
    </>
  );
}
