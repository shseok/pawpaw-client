'use client';

import Divider from '@/components/ui/Divider';
import { cn } from '@/utils/common';

interface Props {
  mode: 'write' | 'edit' | 'delete';
  handleToggle: () => void;
}

const text = {
  write: '리뷰쓰기',
  edit: '리뷰수정',
  delete: '리뷰삭제',
};

export default function ReviewButton({ mode, handleToggle }: Props) {
  return (
    <button
      type="button"
      className={cn(
        'p-2 body2 text-grey-400',
        mode === 'delete' ? 'text-red' : null,
      )}
      onClick={handleToggle}
    >
      {`${text[mode]} ${mode !== 'delete' ? '>' : ''}`}
      <Divider
        type="horizontal"
        className={cn(
          'h-[1px] bg-grey-400',
          mode === 'delete' ? 'bg-red' : null,
        )}
      />
    </button>
  );
}
