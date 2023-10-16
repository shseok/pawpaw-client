import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';
import { Dispatch, SetStateAction } from 'react';

interface MyBoardCardProps {
  userName: string;
  content: string;
  imgs: string[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  commentsCount: number;
  likedCount: number;
}

export default function MyPageBoardCard({
  userName,
  content,
  imgs,
  setShowModal,
  commentsCount,
  likedCount,
}: MyBoardCardProps) {
  return (
    <BoardCard>
      <BoardCard.Header userName={userName} />
      <BoardCard.Content
        type="myPage"
        content={content}
        imgs={imgs}
        onClickModal={() => setShowModal(true)}
      >
        <BoardCard.MyPageBoardCardCommentWrapper
          onClickModal={() => setShowModal(true)}
          commentsCount={commentsCount}
          likedCount={likedCount}
        />
      </BoardCard.Content>
    </BoardCard>
  );
}
