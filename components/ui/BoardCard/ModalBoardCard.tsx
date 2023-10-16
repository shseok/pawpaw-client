import { Comment } from '@/types/types';
import { BoardCardModal } from '@/components/ui/BoardCard/BoardCardPackage/BoardCardModalPackage';

interface ModalBoardCardProps {
  boardId: number;
  userName: string;
  imgs: string[];
  content: string;
  comments: Comment[] | undefined;
  commentsCount: number;
  likedCount: number;
}
export default function ModalBoardCard({
  boardId,
  userName,
  imgs,
  content,
  comments,
  commentsCount,
  likedCount,
}: ModalBoardCardProps) {
  return (
    <BoardCardModal imgs={imgs}>
      <BoardCardModal.Header userName={userName} />
      <BoardCardModal.Content type="modal" content={content} imgs={imgs}>
        <BoardCardModal.BoardCardCommentWrapper
          isModal
          boardId={boardId}
          commentsCount={commentsCount}
          likedCount={likedCount}
        >
          {comments?.map((comment) => (
            <BoardCardModal.ModalComments
              id={comment.id}
              userName={comment.nickname}
              content={comment.content}
              // TODO: 유저 프로필 사진 연결!
              userImg="/Feed/desktop/tempProfilePic.svg"
            />
          ))}
        </BoardCardModal.BoardCardCommentWrapper>
      </BoardCardModal.Content>
    </BoardCardModal>
  );
}
