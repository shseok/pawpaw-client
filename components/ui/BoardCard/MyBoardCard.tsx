import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import { Dispatch, SetStateAction } from 'react';

interface MyBoardCardProps {
  userName: string;
  content: string;
  imgs: string[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  // comments: Comment[] | undefined;
  commentsCount: number;
}

export default function MyBoardCard({
  userName,
  content,
  imgs,
  setShowModal,
  // comments,
  commentsCount,
}: MyBoardCardProps) {
  return (
    <BoardCard>
      <BoardCard.Header userId={userName} />
      <BoardCard.Content
        type="myPage"
        content={content}
        imgs={imgs}
        onClickModal={() => setShowModal(true)}
      >
        <BoardCard.MyPageBoardCardCommentWrapper
          commentsCount={commentsCount}
          onClickModal={() => setShowModal(true)}
        />
      </BoardCard.Content>
    </BoardCard>
  );
}
