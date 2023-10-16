import { Dispatch, SetStateAction } from 'react';
import { Comment } from '@/types/types';
import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import FlexBox from '../FlexBox';

interface FeedBoardCardProps {
  boardId: number;
  userName: string;
  content: string;
  imgs: string[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  comments: Comment[] | undefined;
  commentsCount: number;
  likedCount: number;
}

export default function FeedBoardCard({
  boardId,
  userName,
  content,
  imgs,
  setShowModal,
  comments,
  commentsCount,
  likedCount,
}: FeedBoardCardProps) {
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
    >
      <BoardCard.Header userName={userName} />
      <BoardCard.Content
        type="mainPC"
        content={content}
        imgs={imgs}
        onClickModal={() => setShowModal(true)}
      >
        <BoardCard.BoardCardCommentWrapper
          boardId={boardId}
          commentsCount={commentsCount}
          likedCount={likedCount}
        >
          <FlexBox
            direction="column"
            justify="start"
            className="max-h-[82px] overflow-scroll"
          >
            {comments?.map((comment) => (
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
