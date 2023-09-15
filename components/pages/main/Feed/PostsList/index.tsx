/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Dispatch, SetStateAction } from 'react';
import useCommentsQuery from '@/hooks/queries/PostCommentsQuery';
import useGetInfiniteData from '@/hooks/queries/InfiniteData';
import { Comment, Post } from '@/types/types';
import FlexBox from '../../../../ui/FlexBox';
import FeedPostCard from '../../../../ui/PostCard/FeedPostCard';

export default function PostsList({
  setSelectedPost,
  setSelectedComments,
  setShowModal,
}: {
  setSelectedPost: Dispatch<SetStateAction<Post | null>>;
  setSelectedComments: Dispatch<SetStateAction<Comment[] | undefined>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { Observer, data: posts } = useGetInfiniteData({
    infiniteQueryKey: ['posts'],
  });
  const { data: comments } = useCommentsQuery();

  return (
    <FlexBox direction="column" className="gap-10">
      {posts?.pages?.map((post) => {
        // 댓글을 위한 부분인데 나중에 실제 api 연결하면 바뀔 예정
        const filteredComments = comments?.filter(
          (comment) => comment.PostId === post.id,
        );
        return (
          <div
            key={post.id}
            onClick={() => {
              setSelectedPost(post);
              setSelectedComments(filteredComments);
            }}
            className="w-full"
          >
            <FeedPostCard
              userId={post.albumId}
              content={post.title}
              imgs={[post.url, post.url, post.url]}
              setShowModal={setShowModal}
              comments={filteredComments}
            />
          </div>
        );
      })}
      <Observer>
        <div>로딩스피너...</div>
      </Observer>
    </FlexBox>
  );
}
