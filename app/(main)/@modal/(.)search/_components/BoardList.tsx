import Divider from '@/components/ui/Divider';
import { fetchFilteredBoards } from '@/service/server/chatRoom';
import format from 'date-fns/format';
import Image from 'next/image';
import LikeIcon from '@/public/svgs/like.svg';
import CommentIcon from '@/public/svgs/ChatCircle.svg';
import Link from 'next/link';

export default async function BoardList({ query }: { query: string }) {
  const boards = await fetchFilteredBoards(query);

  return (
    <div className="flex flex-col h-full gap-4 pb-20 mt-3">
      <span className="header4">게시글 {boards.content.length}건</span>
      <div className="grid grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2">
        {boards.content.map((board) => (
          <Link
            href={`/board/${board.id}`}
            key={board.id}
            className="flex flex-col gap-3 px-6 py-4 overflow-hidden shadow-md border rounded-[10px]"
          >
            <div className="flex items-center gap-4">
              <Image
                src={board.userImageUrl}
                alt={board.writer}
                width={200}
                height={200}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">{board.writer}</span>
                <span className="text-sm text-gray-500">
                  {format(new Date(board.createdDate), 'yy-MM-dd HH:mm')}
                </span>
              </div>
            </div>
            <p>{board.content}</p>
            <Divider type="horizontal" />
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <LikeIcon className="w-4 h-4 fill-black" />
                {board.likedCount}
              </div>
              <div className="flex items-center">
                <CommentIcon className="w-4 h-4 fill-black" />
                {board.replyCount}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
