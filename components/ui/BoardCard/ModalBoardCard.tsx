import { BoardCardModal } from '@/components/ui/BoardCard/BoardCardPackage/BoardCardModalPackage';
import useGetCommentList from '@/hooks/queries/useGetCommentList';
import { Board } from '@/types/types';

export default function ModalBoardCard({ board }: { board: Board }) {
  const { data: commentList, Observer } = useGetCommentList(board.id);

  return (
    <BoardCardModal imgs={board.fileNames}>
      <BoardCardModal.Header
        userName={board.writer}
        userImage={board.userImageUrl}
        createdDate={board.createdDate}
      />
      <BoardCardModal.Content
        type="modal"
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
