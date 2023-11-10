import { Suspense } from 'react';
import ChatRoomList from './_components/ChatRoomList';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = searchParams;
  const searchQuery = query ?? '강아지';
  return (
    <main className="flex flex-col h-full overflow-y-auto scrollbar-hide">
      <section className="overflow-y-hidden h-3/5">
        <Suspense fallback={<div>loaindg...</div>}>
          <ChatRoomList query={searchQuery} />
        </Suspense>
      </section>
      <section>
        <div>유저목록</div>
      </section>
      <section>
        <div>게시글목록</div>
      </section>
    </main>
  );
}
