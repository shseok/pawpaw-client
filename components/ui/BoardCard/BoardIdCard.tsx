// import { Board } from '@/types/types';
import useGetBoard from '@/hooks/queries/useGetBoard';
import useGetCommentList from '@/hooks/queries/useGetCommentList';
import { BoardCardId } from './BoardCardPackage/BoardCardIdPackage';

// interface MyBoardCardProps {
//   board: Board;
// }

export default function BoardIdCard({ boardId }: { boardId: number }) {
  const { data: board } = useGetBoard(boardId);
  const { data: commentList, Observer } = useGetCommentList(boardId);

  if (board) {
    return (
      <BoardCardId>
        <BoardCardId.Header board={board} />
        <BoardCardId.Content
          type="id"
          content={board.content}
          imgs={board.fileNames}
        >
          <BoardCardId.BoardCardCommentWrapper
            isModal
            boardId={board.id}
            commentsCount={board.replyCount}
            likedCount={board.likedCount}
            isLiked={board.boardLiked}
          >
            {commentList?.pages.map((page) =>
              page.content.map((comment) => (
                <BoardCardId.BoardCardModalComments
                  id={comment.id}
                  userName={comment.nickname}
                  content={comment.content}
                  // TODO: 유저 프로필 사진 연결!
                  userImage="/Feed/desktop/tempProfilePic.svg"
                />
              )),
            )}
            <Observer>로딩중...</Observer>
          </BoardCardId.BoardCardCommentWrapper>
        </BoardCardId.Content>
      </BoardCardId>
    );
  }
}
