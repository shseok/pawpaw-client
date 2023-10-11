import { Dispatch, SetStateAction } from 'react';
import { Comment } from '@/types/types';
import { BoardCard } from '@/components/ui/BoardCard';
import FlexBox from '../../../../../ui/FlexBox';

interface FeedBoardCardProps {
  userId: string;
  content: string;
  imgs: string[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  comments: Comment[] | undefined;
}

export default function FeedBoardCard({
  userId,
  content,
  imgs,
  setShowModal,
  comments,
}: FeedBoardCardProps) {
  const commentsCount = comments ? comments.length : 0;
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
    >
      <BoardCard.Header userId={userId} />
      <BoardCard.Content
        type="mainPC"
        content={content}
        imgs={imgs}
        onClickModal={() => setShowModal(true)}
      >
        <BoardCard.CommentWrapper commentsNum={commentsCount}>
          <FlexBox
            direction="column"
            justify="start"
            className="max-h-[82px] overflow-scroll"
          >
            {comments?.map((comment) => (
              <BoardCard.Comments
                key={comment.id}
                userName={comment.userName}
                content={comment.content}
                onClickModal={() => setShowModal(true)}
              />
            ))}
          </FlexBox>
        </BoardCard.CommentWrapper>
      </BoardCard.Content>
    </FlexBox>
  );
}
