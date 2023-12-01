'use client';

import Divider from '@/components/ui/Divider';

interface Props {
  mode: 'write' | 'edit';
  handleToggle: () => void;
}

export default function WriteReviewButton({ mode, handleToggle }: Props) {
  const text = mode === 'write' ? '리뷰쓰기' : '리뷰수정';
  return (
    <button
      type="button"
      className="p-2 body2 text-grey-400"
      onClick={handleToggle}
    >
      {`${text} >`}
      <Divider type="horizontal" className="h-[2px] bg-grey-400" />
    </button>
  );
}
