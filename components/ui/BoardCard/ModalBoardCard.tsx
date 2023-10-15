import { Comment } from '@/types/types';
import { BoardCardModal } from '@/components/ui/BoardCard/BoardCardPackage/BoardCardModalPackage';

interface ModalBoardCardProps {
  userId: string;
  imgs: string[];
  content: string;
  comments: Comment[] | undefined;
  commentsCount: number;
}
export default function ModalBoardCard({
  userId,
  imgs,
  content,
  comments,
  commentsCount,
}: ModalBoardCardProps) {
  return (
    <BoardCardModal imgs={imgs}>
      <BoardCardModal.Header userId={userId} />
      <BoardCardModal.Content type="modal" content={content} imgs={imgs}>
        <BoardCardModal.BoardCardCommentWrapper
          commentsNum={commentsCount}
          isModal
        >
          {comments?.map((comment) => (
            <BoardCardModal.ModalComments
              id={comment.id}
              userName={comment.nickname}
              content={comment.content}
              userImg="/Feed/desktop/tempProfilePic.svg"
            />
          ))}
        </BoardCardModal.BoardCardCommentWrapper>
      </BoardCardModal.Content>
    </BoardCardModal>
  );
}
