import { Dispatch, SetStateAction } from 'react';
import { Comment } from '@/types/types';
import PostCard from '.';
import FlexBox from '../FlexBox';

interface FeedPostCardProps {
  userId: number;
  content: string;
  imgs: string[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  comments: Comment[] | undefined;
}

export default function FeedPostCard({
  userId,
  content,
  imgs,
  setShowModal,
  comments,
}: FeedPostCardProps) {
  const commentsCount = comments ? comments.length : 0;
  return (
    <FlexBox
      direction="column"
      justify="between"
      className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
    >
      <PostCard.Header userId={userId} />
      <PostCard.Content
        imgs={imgs}
        content={content}
        onClickModal={() => setShowModal(true)}
      >
        <PostCard.CommentWrapper commentsNum={commentsCount}>
          <FlexBox
            direction="column"
            justify="start"
            className="max-h-[82px] overflow-scroll"
          >
            {comments?.map((comment) => (
              <PostCard.Comments
                id={comment.id}
                userName={comment.User.name}
                content={comment.content}
                onClickModal={() => setShowModal(true)}
              />
            ))}
          </FlexBox>
        </PostCard.CommentWrapper>
      </PostCard.Content>
    </FlexBox>
  );
}
