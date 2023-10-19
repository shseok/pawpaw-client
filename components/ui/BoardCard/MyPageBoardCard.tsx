import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import { Board } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

interface MyBoardCardProps {
  board: Board;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function MyPageBoardCard({
  board,
  setShowModal,
}: MyBoardCardProps) {
  return (
    <BoardCard>
      <BoardCard.Header
        userName={board.writer}
        createdDate={board.createdDate}
        userImage={board.userImageUrl}
        boardId={board.id}
      />
      <BoardCard.Content
        type="myPage"
        content={board.content}
        imgs={board.fileNames}
        onClickModal={() => setShowModal(true)}
      >
        <BoardCard.MyPageBoardCardCommentWrapper
          onClickModal={() => setShowModal(true)}
          commentsCount={board.replyCount}
          likedCount={board.likedCount}
        />
      </BoardCard.Content>
    </BoardCard>
  );
}
