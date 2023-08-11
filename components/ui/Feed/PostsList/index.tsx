'use client';

import useCommentsQuery from '@/hooks/queries/PostCommentsQuery';
import useGetInfiniteData from '@/hooks/queries/InfiniteData';
import FlexBox from '../../FlexBox';
import PostHeader from './PostHeader';
import PostComment from './PostComment';
import PostContent from './PostContent';

export default function PostsList() {
  const { Observer, data: posts } = useGetInfiniteData({
    infiniteQueryKey: ['posts'],
  });
  const { data: comments } = useCommentsQuery();

  return (
    <FlexBox direction="column" className="gap-[40px]">
      {posts?.pages?.map((post) => {
        // 댓글을 위한 부분인데 나중에 실제 api 연결하면 바뀔 예정
        const filteredComments = comments?.filter(
          (comment) => comment.PostId === post.id,
        );
        const filteredCommentsCount = filteredComments
          ? filteredComments.length
          : 0;

        return (
          <div key={post.id}>
            <FlexBox
              direction="column"
              justify="between"
              className="w-full p-[36px] rounded-[10px] border-[1px] border-[#E9EBED] gap-[16px]"
            >
              <PostHeader userId={post.userId} />
              <PostContent content={post.title}>
                <PostComment commentsNum={filteredCommentsCount}>
                  <FlexBox direction="column">
                    {filteredComments?.map((comment) => (
                      <div key={comment.id}>
                        <span className="font-bold">{comment.User.name}</span>
                        {'  '}
                        {comment.content}
                      </div>
                    ))}
                  </FlexBox>
                </PostComment>
              </PostContent>
            </FlexBox>
          </div>
        );
      })}
      <Observer>
        <div>로딩스피너...</div>
      </Observer>
    </FlexBox>
  );
}
