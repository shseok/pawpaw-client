import { BoardCardModal } from '@/components/ui/BoardCard/BoardCardPackage/BoardCardModalPackage';
import useGetCommentList from '@/hooks/queries/useGetCommentList';

interface ModalBoardCardProps {
  boardId: number;
  userName: string;
  imgs: string[];
  content: string;
  commentsCount: number;
  likedCount: number;
  createdDate: string;
}
export default function ModalBoardCard({
  boardId,
  userName,
  imgs,
  content,
  commentsCount,
  likedCount,
  createdDate,
}: ModalBoardCardProps) {
  const { data: commentList, Observer } = useGetCommentList(boardId);

  return (
    <BoardCardModal imgs={imgs}>
      <BoardCardModal.Header userName={userName} createdDate={createdDate} />
      <BoardCardModal.Content type="modal" content={content} imgs={imgs}>
        <BoardCardModal.BoardCardCommentWrapper
          isModal
          boardId={boardId}
          commentsCount={commentsCount}
          likedCount={likedCount}
        >
          {commentList?.pages.map((page) =>
            page.content.map((comment) => (
              <BoardCardModal.ModalComments
                id={comment.id}
                userName={comment.nickname}
                content={comment.content}
                // TODO: 유저 프로필 사진 연결!
                userImg="/Feed/desktop/tempProfilePic.svg"
              />
            )),
          )}
          <Observer>로딩중...</Observer>
        </BoardCardModal.BoardCardCommentWrapper>
      </BoardCardModal.Content>
    </BoardCardModal>
  );
}
