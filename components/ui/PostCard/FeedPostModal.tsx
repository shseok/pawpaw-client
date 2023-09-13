import { Comment } from '@/types/types';
import PostCard from '.';
import FlexBox from '../FlexBox';

interface FeedPostModalProps {
  userId: number;
  imgs?: string[];
  content: string;
  comments: Comment[] | undefined;
}
export default function FeedPostModal({
  userId,
  imgs,
  content,
  comments,
}: FeedPostModalProps) {
  const filteredCommentsCount = comments ? comments.length : 0;

  return (
    <FlexBox
      direction="column"
      className={` ${
        imgs ? 'w-[1028px]' : 'w-[434px]'
      } h-[720px] p-9 gap-4 bg-white opacity-100 border-[1px] border-grey-200 rounded-[10px]`}
    >
      <PostCard.Header userId={userId} />
      <PostCard.ModalContent content={content}>
        <PostCard.CommentWrapper commentsNum={filteredCommentsCount} isModal>
          {comments?.map((comment) => (
            <PostCard.ModalComments
              id={comment.id}
              userName={comment.User.name}
              content={comment.content}
              userImg="/Feed/desktop/tempProfilePic.svg"
            />
          ))}
        </PostCard.CommentWrapper>
      </PostCard.ModalContent>
    </FlexBox>
  );
}
