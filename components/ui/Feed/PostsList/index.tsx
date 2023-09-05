/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useState } from 'react';
import useCommentsQuery from '@/hooks/queries/PostCommentsQuery';
import useGetInfiniteData from '@/hooks/queries/InfiniteData';
import { Comment, Post } from '@/types/types';
import FlexBox from '../../FlexBox';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostCommentWrapper from './PostCommentWrapper';
import PostComments from './PostComments';
import PostModal from './PostModal';

export default function PostsList() {
  const { Observer, data: posts } = useGetInfiniteData({
    infiniteQueryKey: ['posts'],
  });
  const { data: comments } = useCommentsQuery();

  // 모달창 구현에 필요
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedComment, setSelectedComment] = useState<Comment[] | undefined>(
    undefined,
  );

  return (
    <FlexBox direction="column" className="gap-[40px]">
      <PostModal
        showModal={showModal}
        setShowModal={setShowModal}
        post={selectedPost}
        comment={selectedComment}
      />
      {posts?.pages?.map((post) => {
        // 댓글을 위한 부분인데 나중에 실제 api 연결하면 바뀔 예정
        const filteredComments = comments?.filter(
          (comment) => comment.PostId === post.id,
        );
        const filteredCommentsCount = filteredComments
          ? filteredComments.length
          : 0;
        return (
          <div
            key={post.id}
            onClick={() => {
              setSelectedPost(post);
              setSelectedComment(filteredComments);
            }}
            className="w-full"
          >
            <FlexBox
              direction="column"
              justify="between"
              className="max-h-[500px] p-9 rounded-[10px] border-[1px] border-grey-200 gap-4"
            >
              <PostHeader userId={post.albumId} />
              <PostContent
                content={post.title}
                img={post.url}
                onClickModal={() => setShowModal(true)}
              >
                <PostCommentWrapper commentsNum={filteredCommentsCount}>
                  <FlexBox
                    direction="column"
                    justify="start"
                    className="max-h-[82px] overflow-scroll"
                  >
                    {filteredComments?.map((comment) => (
                      <PostComments
                        commentId={comment.id}
                        commentUserName={comment.User.name}
                        commentContent={comment.content}
                        onClickModal={() => setShowModal(true)}
                      />
                    ))}
                  </FlexBox>
                </PostCommentWrapper>
              </PostContent>
            </FlexBox>
            {showModal ? (
              <FeedModal
                onClick={clickModal}
                post={selectedPost}
                comment={selectedComment}
              />
            ) : null}
          </div>
        );
      })}
      <Observer>
        <div>로딩스피너...</div>
      </Observer>
    </FlexBox>
  );
}
