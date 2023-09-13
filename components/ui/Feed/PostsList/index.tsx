/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useState } from 'react';
import useCommentsQuery from '@/hooks/queries/PostCommentsQuery';
import useGetInfiniteData from '@/hooks/queries/InfiniteData';
import { Comment, Post } from '@/types/types';
import FlexBox from '../../FlexBox';
import PostModal from './PostModal';
import FeedPostCard from '../../PostCard/FeedPostCard';

export default function PostsList() {
  const { Observer, data: posts } = useGetInfiniteData({
    infiniteQueryKey: ['posts'],
  });
  const { data: comments } = useCommentsQuery();

  // 모달창 구현에 필요
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedComments, setSelectedComments] = useState<
    Comment[] | undefined
  >(undefined);

  return (
    <FlexBox direction="column" className="gap-[40px]">
      <PostModal
        showModal={showModal}
        setShowModal={setShowModal}
        post={selectedPost}
        comments={selectedComments}
      />
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
              imgs={[post.url]}
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
