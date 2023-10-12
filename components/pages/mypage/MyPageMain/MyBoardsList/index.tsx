/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Dispatch, SetStateAction } from 'react';
import useGetBoardListInfiniteData from '@/hooks/queries/useGetBoardListInfiniteData';
import { BoardList } from '@/types/types';
import MyBoardCard from '@/components/ui/BoardCard/MyBoardCard';
import FlexBox from '../../../../ui/FlexBox';

export default function MyBoardsList({
  setSelectedBoard,
  setShowModal,
}: {
  setSelectedBoard: Dispatch<SetStateAction<BoardList | null>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { Observer, data: boards } = useGetBoardListInfiniteData({
    infiniteQueryKey: ['boards'],
  });

  return (
    <FlexBox direction="column" className="gap-10">
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
            // setShowModal={setShowModal}
            // comments={board.replyListDto}
            commentsCount={board.replyCount}
          />
        </div>
      ))}
      <Observer>
        <div>로딩스피너...</div>
      </Observer>
    </FlexBox>
  );
}
