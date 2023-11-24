'use client';

import { useState } from 'react';
import Divider from '@/components/ui/Divider';
import ReviewModal from '@/components/ui/Modal/ReviewModal';

export default function WriteReviewButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="p-2 body2 text-grey-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`리뷰쓰기 >`}
        <Divider type="horizontal" className="h-[2px] bg-grey-400" />
      </button>
      <ReviewModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
