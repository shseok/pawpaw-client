'use client';

import { useState } from 'react';
import PostsList from '@/components/pages/main/Feed/BoardsList';
import FlexBox from '@/components/ui/FlexBox';
import FeedHeader from '@/components/pages/main/Feed/FeedHeader';
import { Board, Comment } from '@/types/types';
import PostModal from './BoardsList/BoardModal';

export default function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
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
        setSelectedBoard={setSelectedBoard}
      />
      <PostModal
        showModal={showModal}
        setShowModal={setShowModal}
        post={selectedBoard}
        comments={selectedComments}
      />
    </FlexBox>
  );
}
