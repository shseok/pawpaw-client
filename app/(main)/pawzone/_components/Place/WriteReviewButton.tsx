'use client';

import { useState } from 'react';
import Divider from '@/components/ui/Divider';
import ReviewModal from '@/components/ui/Modal/ReviewModal';

interface Props {
  mode: 'write' | 'edit';
}

export default function WriteReviewButton({ mode }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const text = mode === 'write' ? '리뷰쓰기' : '리뷰수정';
  return (
    <>
      <button
        type="button"
        className="p-2 body2 text-grey-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`${text} >`}
        <Divider type="horizontal" className="h-[2px] bg-grey-400" />
      </button>
      <ReviewModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
