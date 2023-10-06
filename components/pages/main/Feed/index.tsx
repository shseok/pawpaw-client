'use client';

import { useState } from 'react';
import PostsList from '@/components/pages/main/Feed/PostsList';
import FlexBox from '@/components/ui/FlexBox';
import FeedHeader from '@/components/pages/main/Feed/FeedHeader';
import { Post, Comment } from '@/types/types';
import PostModal from './PostsList/PostModal';

export default function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedComments, setSelectedComments] = useState<
    Comment[] | undefined
  >(undefined);
  return (
    <FlexBox
      direction="column"
      className={`gap-10 ${showModal ? 'overflow-hidden' : null}`}
    >
      <FeedHeader />
      <PostsList
        setSelectedComments={setSelectedComments}
        setShowModal={setShowModal}
        setSelectedPost={setSelectedPost}
      />
      <PostModal
        showModal={showModal}
        setShowModal={setShowModal}
        post={selectedPost}
        comments={selectedComments}
      />
    </FlexBox>
  );
}
