'use client';

import { useState } from 'react';
import BoardsList from '@/components/pages/main/Feed/BoardsList';
import FlexBox from '@/components/ui/FlexBox';
import FeedHeader from '@/components/pages/main/Feed/FeedHeader';
import { Board } from '@/types/types';
import BoardModal from '../../../ui/BoardModal';

export default function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);

  return (
    <FlexBox
      direction="column"
      className={`gap-10 w-full ${showModal ? 'overflow-hidden' : null}`}
    >
      <FeedHeader />
      <BoardsList
        setShowModal={setShowModal}
        setSelectedBoard={setSelectedBoard}
      />
      <BoardModal
        showModal={showModal}
        setShowModal={setShowModal}
        board={selectedBoard}
      />
    </FlexBox>
  );
}
