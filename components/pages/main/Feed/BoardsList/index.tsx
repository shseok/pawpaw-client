/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Dispatch, SetStateAction } from 'react';
import useGetBoardList from '@/hooks/queries/useGetBoardList';
import { Board } from '@/types/types';
import FeedBoardLoading from '@/components/ui/Loading/FeedBoardLoading';
import FlexBox from '../../../../ui/FlexBox';
import FeedBoardCard from '../../../../ui/BoardCard/FeedBoardCard';

export default function BoardsList({
  setSelectedBoard,
  setShowModal,
}: {
  setSelectedBoard: Dispatch<SetStateAction<Board | null>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    Observer,
    data: boardList,
    isLoading,
  } = useGetBoardList({
    infiniteQueryKey: ['boards'],
  });

  return (
    <FlexBox direction="column" className="w-full gap-10">
      {isLoading ? (
        <FeedBoardLoading />
      ) : (
        boardList?.pages &&
        boardList?.pages?.map((page) =>
          page.content.length > 0 ? (
            page.content.map((board) => (
              <div
                key={board.id}
                onClick={() => {
                  setSelectedBoard(board);
                }}
                className="w-full"
              >
                <FeedBoardCard
                  userId={board.writer}
                  content={board.content}
                  // TODO: 이미지 연결
                  imgs={board.fileNames}
                  setShowModal={setShowModal}
                  comments={board.replyListDto}
                  commentsCount={board.replyCount}
                />
              </div>
            ))
          ) : (
            <div>아직 게시물이 없어요ㅠㅠ</div>
          ),
        )
      )}
      <Observer>
        <div>로딩스피너...</div>
      </Observer>
    </FlexBox>
  );
}
