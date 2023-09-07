import PostCommentWrapper from '@/components/ui/Feed/PostsList/PostCommentWrapper';
import PostComments from '@/components/ui/Feed/PostsList/PostComments';
import PostContent from '@/components/ui/Feed/PostsList/PostContent';
import PostHeader from '@/components/ui/Feed/PostsList/PostHeader';

export default function MyPost() {
  return (
    <div>
      <PostHeader userId={13} />
      <PostContent
        content="천재고양이 구름이를 소개합니다. 누구 고양이길래 이렇게 귀엽고"
        img="/Feed/desktop/tempPostPic/tempPostPic1.svg"
      >
        <PostCommentWrapper commentsNum={13}>
          <PostComments />
        </PostCommentWrapper>
      </PostContent>
    </div>
  );
}
