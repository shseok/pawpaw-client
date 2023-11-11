import { fetchFilteredBoards } from '@/service/server/chatroom';
import Link from 'next/link';
import BoardCard from './BoardCard';

export default async function SlicedBoardList({
  query,
  page,
}: {
  query: string;
  page: string;
}) {
  const boards = await fetchFilteredBoards(query, Number(page) || 1);

  return (
    <section className="flex flex-col gap-4 mt-4 ">
      <div className="flex justify-between">
        <span className="header4">검색된 게시글 {boards.content.length}건</span>
        <Link
          href={`/search/boards?query=${query ?? ' '}&page=1`}
          className="header4 text-grey-400"
        >
          더보기
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {boards.content.slice(0, 4).map((board) => (
          <BoardCard key={board.id} {...board} />
        ))}
      </div>
    </section>
  );
}
