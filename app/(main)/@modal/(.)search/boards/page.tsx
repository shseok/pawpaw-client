import { Suspense } from 'react';
import { fetchBoardsPages } from '@/service/server/chatroom';
import BoardList from './_components/BoardList';
import Pagination from '../_components/Pagination';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const { query, page } = searchParams;
  const totalPage = await fetchBoardsPages(query);

  return (
    <>
      <section className="h-full overflow-y-auto">
        <Suspense fallback={<div>loading...</div>}>
          <BoardList query={query} page={page} />
        </Suspense>
      </section>
      <Pagination totalPages={totalPage} />
    </>
  );
}
