import { BoardCard } from '@/components/ui/BoardCard/BoardCardPackage';

export default function MyBoardCard() {
  return (
    <BoardCard>
      <BoardCard.Header userId="id" />
      <BoardCard.Content
        type="myPage"
        content="천재고양이 구름이를 소개합니다. 누구 고양이길래 이렇게 귀엽고"
        imgs={['/Feed/desktop/tempPostPic/tempPostPic1.svg']}
      >
        <BoardCard.MyPageBoardCardCommentWrapper commentsNum={13} />
      </BoardCard.Content>
    </BoardCard>
  );
}
