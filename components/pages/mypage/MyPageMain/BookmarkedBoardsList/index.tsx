/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from 'react';
import { Board } from '@/types/types';
import MyBoardCard from '@/components/ui/BoardCard/MyPageBoardCard';
import BoardModal from '@/components/ui/BoardModal';
import MyBoardListLoading from '@/components/ui/Loading/MyBoardListLoading';
import useGetBookmarkedBoardList from '@/hooks/queries/useGetMyBookmarkedBoardList';

export default function BookmarkedBoardsList() {
  const { Observer, data, isLoading } = useGetBookmarkedBoardList();

  // 모달을 위한 상태
  const [showModal, setShowModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);

  if (isLoading) {
    return <MyBoardListLoading />;
  }

  // TODO: 게시물 없을 경우 없다고 띄우기
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="grid w-full gap-5 tablet:grid-cols-2 tablet:mt-4">
        {data &&
          data?.pages?.map((page) =>
            page.content.map((board) => (
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
                  imgs={board.fileNames}
                  setShowModal={setShowModal}
                  commentsCount={board.replyCount}
                  likedCount={board.likedCount}
                  createdDate={board.createdDate}
                />
              </div>
            )),
          )}
        <Observer>
          <div>로딩스피너...</div>
        </Observer>
      </div>
      <BoardModal
        showModal={showModal}
        setShowModal={setShowModal}
        board={selectedBoard}
      />
    </>
  );
}
