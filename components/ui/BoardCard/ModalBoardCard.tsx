import { BoardCardModal } from '@/components/ui/BoardCard/BoardCardPackage/BoardCardModalPackage';
import useGetBoard from '@/hooks/queries/useGetBoard';
import useGetCommentList from '@/hooks/queries/useGetCommentList';
import ModalBoardLoading from '../Loading/ModalBoardLoading';

export default function ModalBoardCard({ boardId }: { boardId: number }) {
  const { data: board, isLoading } = useGetBoard(boardId);
  const { data: commentList, Observer } = useGetCommentList(boardId);

  if (isLoading) return <ModalBoardLoading />;
  if (board) {
    return (
      <BoardCardModal imgs={board.fileNames}>
        <BoardCardModal.Header board={board} />
        <BoardCardModal.Content
          type="modal"
          boardId={board.id}
          content={board.content}
          imgs={board.fileNames}
        >
          <BoardCardModal.BoardCardCommentWrapper
            isModal
            boardId={board.id}
            commentsCount={board.replyCount}
            likedCount={board.likedCount}
            isLiked={board.boardLiked}
          >
            {commentList?.pages.map((comment) => (
              <BoardCardModal.ModalComments
                boardId={board.id}
                id={comment.id}
                userName={comment.nickname}
                content={comment.content}
                isUser={comment.replyWriter}
                userImage={comment.userImageUrl}
              />
            ))}
            <Observer>로딩중...</Observer>
          </BoardCardModal.BoardCardCommentWrapper>
        </BoardCardModal.Content>
      </BoardCardModal>
    );
  }
  return <div>내용이 없습니다.</div>;
}
