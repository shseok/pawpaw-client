import useGetBoard from '@/hooks/queries/useGetBoard';
import useGetCommentList from '@/hooks/queries/useGetCommentList';
import { BoardCardId } from './BoardCardPackage/BoardCardIdPackage';

export default function BoardIdCard({ boardId }: { boardId: number }) {
  const { data: board } = useGetBoard(boardId);
  const { data: commentList, Observer } = useGetCommentList(boardId);

  if (board) {
    return (
      <BoardCardId>
        <BoardCardId.Header board={board} />
        <BoardCardId.Content
          type="id"
          boardId={board.id}
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
                  boardId={board.id}
                  id={comment.id}
                  userName={comment.nickname}
                  content={comment.content}
                  isUser={comment.replyWriter}
                  userImage={comment.userImageUrl}
                />
              )),
            )}
            <Observer>로딩중...</Observer>
          </BoardCardId.BoardCardCommentWrapper>
        </BoardCardId.Content>
      </BoardCardId>
    );
  }
  return <div>내용이 없습니다</div>;
}
