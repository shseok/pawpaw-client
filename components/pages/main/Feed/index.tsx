'use client';

import { useState } from 'react';
import PostsList from '@/components/pages/main/Feed/BoardsList';
import FlexBox from '@/components/ui/FlexBox';
import FeedHeader from '@/components/pages/main/Feed/FeedHeader';
import { BoardList } from '@/types/types';
import PostModal from './BoardsList/BoardModal';

export default function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<BoardList | null>(null);

  return (
    <FlexBox
      direction="column"
      className={`gap-10 ${showModal ? 'overflow-hidden' : null}`}
    >
      <FeedHeader />
      <PostsList
        setShowModal={setShowModal}
        setSelectedBoard={setSelectedBoard}
      />
      <PostModal
        showModal={showModal}
        setShowModal={setShowModal}
        board={selectedBoard}
        comments={selectedBoard?.comments}
      />
    </FlexBox>
  );
}
