import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import { Dispatch, SetStateAction } from 'react';

interface MyBoardCardProps {
  userName: string;
  content: string;
  imgs: string[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  commentsCount: number;
}

export default function MyPageBoardCard({
  userName,
  content,
  imgs,
  setShowModal,
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
