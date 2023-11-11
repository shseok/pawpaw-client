import { Suspense } from 'react';
import { fetchBoardsPages } from '@/service/server/chatroom';
import BoardList from './_components/BoardList';
import Pagination from '../_components/Pagination';
import BoardsLoading from './_components/BoardsLoading';

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
        <Suspense fallback={<BoardsLoading />}>
          <BoardList query={query} page={page} />
        </Suspense>
      </section>
      <Pagination totalPages={totalPage} />
    </>
  );
}
