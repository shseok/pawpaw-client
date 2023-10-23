import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import { Board } from '@/types/types';

export default function MyPageBoardCard({ board }: { board: Board }) {
  return (
    <BoardCard>
      <BoardCard.Header board={board} />
      <BoardCard.Content
        type="myPage"
        boardId={board.id}
        content={board.content}
        imgs={board.fileNames}
      >
        <BoardCard.MyPageBoardCardCommentWrapper
          commentsCount={board.replyCount}
          likedCount={board.likedCount}
        />
      </BoardCard.Content>
    </BoardCard>
  );
}
