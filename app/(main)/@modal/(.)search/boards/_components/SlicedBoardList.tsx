import { fetchFilteredBoards } from '@/service/server/chatRoom';
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {boards.content.slice(0, 4).map((board) => (
        <BoardCard key={board.id} {...board} />
      ))}
    </div>
  );
}
