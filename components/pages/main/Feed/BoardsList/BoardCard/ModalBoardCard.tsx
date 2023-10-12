import { Comment } from '@/types/types';
import { BoardCardModal } from '@/components/ui/BoardCard/BoardCardModal';

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
    <BoardCardModal imgs={imgs}>
      <BoardCardModal.Header userId={userId} />
      <BoardCardModal.Content type="modal" content={content} imgs={imgs}>
        <BoardCardModal.CommentWrapper
          commentsNum={filteredCommentsCount}
          isModal
        >
          {comments?.map((comment) => (
            <BoardCardModal.ModalComments
              id={comment.id}
              userName={comment.userName}
              content={comment.content}
              userImg="/Feed/desktop/tempProfilePic.svg"
            />
          ))}
        </BoardCardModal.CommentWrapper>
      </BoardCardModal.Content>
    </BoardCardModal>
  );
}
