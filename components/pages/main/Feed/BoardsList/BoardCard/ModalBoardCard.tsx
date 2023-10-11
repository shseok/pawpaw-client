import { Comment } from '@/types/types';
import { BoardCard } from '@/components/ui/BoardCard';
import FlexBox from '../../../../../ui/FlexBox';

interface ModalBoardCardProps {
  userId: string;
  imgs?: string[];
  content: string;
  comments: Comment[] | undefined;
}
export default function ModalBoardCard({
  userId,
  imgs,
  content,
  comments,
}: ModalBoardCardProps) {
  const filteredCommentsCount = comments ? comments.length : 0;

  return (
    <FlexBox
      direction="column"
      className={` ${
        imgs ? 'w-[1028px]' : 'w-[434px]'
      } h-[720px] p-9 gap-4 bg-white opacity-100 border-[1px] border-grey-200 rounded-[10px]`}
    >
      <BoardCard.Header userId={userId} />
      <BoardCard.Content type="modal" content={content} imgs={imgs}>
        <BoardCard.CommentWrapper commentsNum={filteredCommentsCount} isModal>
          {comments?.map((comment) => (
            <BoardCard.ModalComments
              id={comment.id}
              userName={comment.userName}
              content={comment.content}
              userImg="/Feed/desktop/tempProfilePic.svg"
            />
          ))}
        </BoardCard.CommentWrapper>
      </BoardCard.Content>
    </FlexBox>
  );
}
