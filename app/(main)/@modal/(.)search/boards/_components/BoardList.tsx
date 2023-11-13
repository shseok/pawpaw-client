import { fetchFilteredBoards } from '@/service/server/chatRoom';
import NotFoundIcon from '@/public/svgs/MagnifyingGlass.svg';
import BoardCard from './BoardCard';

export default async function BoardList({
  query,
  page,
}: {
  query: string;
  page?: string;
}) {
  const boards = await fetchFilteredBoards(query, Number(page) || 1);
  const isExistBoards = boards.content.length !== 0;

  return (
    <div className="flex flex-col h-full gap-4 mt-3">
      {!isExistBoards && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <NotFoundIcon className="w-40 h-40" />
          <p className="header2 text-grey-500">
            아쉽지만, 검색 결과가 없습니다.
          </p>
        </div>
      )}
      {isExistBoards && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {boards.content.map((board) => (
            <BoardCard key={board.id} {...board} />
          ))}
        </div>
      )}
    </div>
  );
}
