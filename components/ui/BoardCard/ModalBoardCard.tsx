import { BoardCardModal } from '@/components/ui/BoardCard/BoardCardPackage/BoardCardModalPackage';
import useGetBoard from '@/hooks/queries/useGetBoard';
import useGetCommentList from '@/hooks/queries/useGetCommentList';

export default function ModalBoardCard({ boardId }: { boardId: number }) {
  const { data: board } = useGetBoard(boardId);
  const { data: commentList, Observer } = useGetCommentList(boardId);

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
            {commentList?.pages.map((page) =>
              page.content.map((comment) => (
                <BoardCardModal.ModalComments
                  id={comment.id}
                  userName={comment.nickname}
                  content={comment.content}
                  // TODO: 유저 프로필 사진 연결!
                  userImage="/Feed/desktop/tempProfilePic.svg"
                />
              )),
            )}
            <Observer>로딩중...</Observer>
          </BoardCardModal.BoardCardCommentWrapper>
        </BoardCardModal.Content>
      </BoardCardModal>
    );
  }
  return <div>내용이 없습니다.</div>;
}
