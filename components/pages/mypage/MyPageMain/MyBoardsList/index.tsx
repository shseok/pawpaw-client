/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';
import { MyBoardList } from '@/types/types';
import MyBoardCard from '@/components/ui/BoardCard/MyBoardCard';
import BoardModal from '@/components/ui/BoardModal';
import useGetMyBoardListInfiniteData from '@/hooks/queries/useGetMyBoardListInfiniteData';
import MyBoardListLoading from '@/components/ui/Loading/MyBoardListLoading';

export default function MyBoardsList() {
  const {
    Observer,
    data: myBoards,
    isLoading,
  } = useGetMyBoardListInfiniteData();

  // 모달을 위한 상태
  const [showModal, setShowModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<MyBoardList | null>(null);

  if (isLoading) {
    return <MyBoardListLoading />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="grid w-full gap-5 mt-10 tablet:grid-cols-2 tablet:mt-0">
        {myBoards
          ? myBoards?.pages?.map((board) => (
              <div
                key={board.id}
                onClick={() => {
                  setSelectedBoard(board);
                  console.log(myBoards);
                }}
                className="w-full"
              >
                <MyBoardCard
                  userName={board.writer}
                  content={board.content}
                  // TODO: 이미지 연결
                  imgs={[]}
                  commentsCount={board.replyCount}
                  setShowModal={setShowModal}
                />
              </div>
            ))
          : '아직 게시물이 없어요ㅠㅠ'}
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
