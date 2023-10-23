/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Board } from '@/types/types';
import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import FlexBox from '../FlexBox';

export default function FeedBoardCard({ board }: { board: Board }) {
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
    >
      <BoardCard.Header board={board} />
      <BoardCard.Content
        type="mainPC"
        boardId={board.id}
        content={board.content}
        imgs={board.fileNames}
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
                boardId={board.id}
                userName={comment.nickname}
                content={comment.content}
              />
            ))}
          </FlexBox>
        </BoardCard.BoardCardCommentWrapper>
      </BoardCard.Content>
    </FlexBox>
  );
}
