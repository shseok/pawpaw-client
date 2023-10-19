import { Dispatch, SetStateAction } from 'react';
import { Board } from '@/types/types';
import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import FlexBox from '../FlexBox';

export default function FeedBoardCard({
  board,
  setShowModal,
}: {
  board: Board;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
    >
      <BoardCard.Header
        userName={board.writer}
        createdDate={board.createdDate}
        userImage={board.userImageUrl}
      />
      <BoardCard.Content
        type="mainPC"
        content={board.content}
        imgs={board.fileNames}
        onClickModal={() => setShowModal(true)}
      >
        <BoardCard.BoardCardCommentWrapper
          boardId={board.id}
          commentsCount={board.replyCount}
          likedCount={board.likedCount}
          isLiked={board.boardLiked}
        >
          <FlexBox
            direction="column"
            justify="start"
            align="start"
            className="max-h-[74px] overflow-hidden"
          >
            {board.replyListDto?.map((comment) => (
              <BoardCard.Comments
                key={comment.id}
                userName={comment.nickname}
                content={comment.content}
                onClickModal={() => setShowModal(true)}
              />
            ))}
          </FlexBox>
        </BoardCard.BoardCardCommentWrapper>
      </BoardCard.Content>
    </FlexBox>
  );
}
