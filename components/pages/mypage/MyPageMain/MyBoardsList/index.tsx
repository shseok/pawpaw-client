/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';
import useGetBoardListInfiniteData from '@/hooks/queries/useGetBoardListInfiniteData';
import { MyBoardList } from '@/types/types';
import MyBoardCard from '@/components/ui/BoardCard/MyBoardCard';
import BoardModal from '@/components/ui/BoardModal';

export default function MyBoardsList() {
  const { Observer, data: boards } = useGetBoardListInfiniteData({
    infiniteQueryKey: ['boards'],
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<MyBoardList | null>(null);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="grid grid-cols-2">
        {boards?.pages?.map((board) => (
          <div
            key={board.id}
            onClick={() => {
              setSelectedBoard(board);
            }}
            className="w-full"
          >
            <MyBoardCard
              userName={board.writer}
              content={board.content}
              // TODO: 이미지 연결
              imgs={[]}
              // comments={board.replyListDto}
              commentsCount={board.replyCount}
              setShowModal={setShowModal}
            />
          </div>
        ))}
        <Observer>
          <div>로딩스피너...</div>
        </Observer>
      </div>
      <BoardModal
        showModal={showModal}
        setShowModal={setShowModal}
        board={selectedBoard}
        comments={selectedBoard?.replyListDto}
      />
    </>
  );
}
